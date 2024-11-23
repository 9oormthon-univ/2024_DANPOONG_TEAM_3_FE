import { Spacing } from '@/components/common/Spacing';
import clsx from 'clsx';
import ShoppingBag from '@/assets/ShoppingBag.svg?react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ReactNode, useEffect, useState } from 'react';
import { TimeSelectPopover } from './TimeSelectPopover';
import { Controller, useFormContext } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { SHOPPING_BAG_LIST_KEY } from '../constant';

export function ReservationForm() {
    const { watch } = useFormContext();
    const currentReservation = watch();

    return (
        <div className="w-full border border-[#E5E5E5] rounded-lg h-fit p-[1.5rem] flex flex-col justify-center items-center shadow-sm">
            <div className="flex h-fit w-full justify-between gap-[0.5rem]">
                <DateSection />
                <GuestSection />
            </div>
            <Spacing direction="vertical" size={10} />
            <TimeSection />
            <Spacing direction="vertical" size={17} />
            <div className="w-full h-fit">
                <Price price={20000} />
            </div>
            <Spacing direction="vertical" size={20} />
            <div className="w-full flex justify-between gap-3">
                <Button variant="outline" onClick={handleShoppingBag}>
                    <ShoppingBag />
                </Button>
                <Button variant="default">구매하기</Button>
            </div>
        </div>
    );

    function handleShoppingBag() {
        const shoppingBagList = localStorage.getItem(SHOPPING_BAG_LIST_KEY);
        const reservation = currentReservation;

        const newShoppingBagList = shoppingBagList
            ? JSON.parse(shoppingBagList).push(currentReservation)
            : [currentReservation];

        localStorage.setItem(SHOPPING_BAG_LIST_KEY, JSON.stringify(newShoppingBagList));
    }
}

export function Price({ price }: { price: number }) {
    return (
        <div className="flex gap-1 items-end w-full font-semibold justify-end">
            <p className="text-uiGray text-xl pb-[2px]">총</p>
            <p className="text-uiBlack text-3xl">{new Intl.NumberFormat('ko-KR').format(price)}원</p>
        </div>
    );
}

export function DateSection() {
    const { watch } = useFormContext();
    const currentDate = watch('date');

    return (
        <div className="flex flex-col items-start gap-1 w-full">
            <SectionTitle>날짜</SectionTitle>
            <ReservationInput>
                <p className={currentDate ? 'text-uiBlack' : 'text-gray-200'}>
                    {currentDate ? format(currentDate, 'MM월 dd일 (E)', { locale: ko }) : '선택되지 않음'}
                </p>
            </ReservationInput>
        </div>
    );
}

export function GuestSection() {
    const { watch } = useFormContext();
    const currentAdultCount = watch('adultCount');
    const currentChildCount = watch('childCount');

    return (
        <div className="flex flex-col items-start gap-1 w-full">
            <SectionTitle>인원</SectionTitle>
            <ReservationInput>
                <p>
                    성인 {currentAdultCount ?? 0}명, 어린이 {currentChildCount ?? 0}명
                </p>
            </ReservationInput>
        </div>
    );
}

export function TimeSection() {
    const { control, watch, setValue } = useFormContext();
    const [disabled, setDisabled] = useState(false);

    const currentDate = watch('date');
    const currentAdultCount = watch('adultCount');
    const currentChildCount = watch('childCount');

    // react-query
    const candidateTimes = [
        {
            date: '2024-11-23',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
        {
            date: '2024-12-02',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
        {
            date: '2024-12-03',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
        {
            date: '2024-12-04',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
        {
            date: '2024-12-05',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
        {
            date: '2024-12-31',
            times: ['14:00', '16:00', '18:00'],
            remainParticipants: 10,
            maxParticipants: 20,
        },
    ];

    const filteredCandidateTimes = candidateTimes.filter((time) => {
        const totalParticipants = currentAdultCount + currentChildCount;
        return time.date === format(currentDate, 'yyyy-MM-dd') && totalParticipants < time.remainParticipants;
    })[0];

    useEffect(() => {
        if (!currentDate || currentAdultCount + currentChildCount === 0) {
            setDisabled(true);
            setValue('time', '');
        } else {
            setDisabled(false);
        }
    }, [currentDate, currentAdultCount, currentChildCount]);

    return (
        <div className="w-full flex flex-col items-start gap-1">
            <SectionTitle>시간</SectionTitle>

            <Controller
                control={control}
                name="time"
                render={({ field: { onChange, value } }) => (
                    <TimeSelectPopover
                        disabled={disabled}
                        trigger={
                            <ReservationInput className="cursor-pointer">
                                <p className={value ? 'text-uiBlack' : 'text-gray-200'}>
                                    {!value || disabled ? '선택되지 않음' : value}
                                </p>
                            </ReservationInput>
                        }
                        content={
                            <RadioGroup className="!w-full" onValueChange={onChange} value={value}>
                                {filteredCandidateTimes?.times.length > 0 ? (
                                    <>
                                        {filteredCandidateTimes?.times.map((timeCandidate) => (
                                            <TimeSelect key={timeCandidate} value={timeCandidate}>
                                                <div className="flex justify-between w-full">
                                                    <div>{timeCandidate}</div>
                                                    <div className="flex gap-1 items-center">
                                                        <p className="text-[1rem] text-uiBlack">
                                                            {filteredCandidateTimes.remainParticipants}
                                                        </p>
                                                        <p className="text-uiGray text-[0.9rem]">
                                                            / {filteredCandidateTimes.maxParticipants}명
                                                        </p>
                                                    </div>
                                                </div>
                                            </TimeSelect>
                                        ))}
                                    </>
                                ) : (
                                    <p className="w-full h-12 text-[1rem] flex items-center justify-center py-3 px-8">
                                        이용 가능한 시간이 없습니다.
                                    </p>
                                )}
                            </RadioGroup>
                        }
                    ></TimeSelectPopover>
                )}
            />
        </div>
    );
}

// common
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'default' | 'outline';
}

export function Button({ children, variant, className, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                variant === 'outline'
                    ? 'border border-[#E4E4E4] rounded-lg flex justify-center items-center'
                    : 'bg-main text-white',
                'w-full h-12 rounded-lg flex justify-center items-center',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

interface ReservationInputProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function ReservationInput({ children, className, ...props }: ReservationInputProps) {
    return (
        <div
            className={clsx(className, 'px-2 py-2 w-full h-fit border border-[#E4E4E4] rounded-lg flex text-sm')}
            {...props}
        >
            {children}
        </div>
    );
}

export function SectionTitle({ children }: { children: string }) {
    return <p className="text-uiGray text-xs">{children}</p>;
}

export function TimeSelect({ value, children }: { value: string; children: ReactNode }) {
    return (
        <div className="flex items-center space-x-2 w-full rounded-md bg-white p-3">
            <RadioGroupItem
                value={value}
                id={value}
                className="w-4 h-4 text-main appearance-none border-[#E4E4E4] bg-white"
            />
            <Label className="w-full" htmlFor={value}>
                {children}
            </Label>
        </div>
    );
}
