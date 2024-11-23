import { Spacing } from '@/components/common/Spacing';
import clsx from 'clsx';
import ShoppingBag from '@/assets/ShoppingBag.svg?react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ReactNode } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { TimeSelectPopover } from './TimeSelectPopover';

export function ReservationForm({
    selectedDate,
    adultCount,
    childCount,
    time,
}: {
    selectedDate: Date | undefined;
    adultCount: number;
    childCount: number;
    time?: string;
}) {
    const overlay = useOverlay();

    return (
        <div className="w-full border border-[#E5E5E5] rounded-lg h-fit p-[1.5rem] flex flex-col justify-center items-center shadow-sm">
            <div className="flex h-fit w-full justify-between gap-[0.5rem]">
                <div className="w-1/2 flex flex-col items-start gap-1">
                    <SectionTitle>날짜</SectionTitle>
                    <ReservationInput>
                        <p className={selectedDate ? 'text-uiBlack' : 'text-gray-200'}>
                            {selectedDate ? format(selectedDate, 'MM월 dd일 (E)', { locale: ko }) : '선택되지 않음'}
                        </p>
                    </ReservationInput>
                </div>
                <div className="w-1/2 flex flex-col items-start gap-1">
                    <SectionTitle>인원</SectionTitle>
                    <ReservationInput>
                        <p>
                            성인 {adultCount ?? 0}명, 어린이 {childCount ?? 0}명
                        </p>
                    </ReservationInput>
                </div>
            </div>
            <Spacing direction="vertical" size={10} />
            <div className="w-full flex flex-col items-start gap-1">
                <SectionTitle>시간</SectionTitle>
                <ReservationInput
                    className="cursor-pointer"
                    onClick={() => {
                        overlay.open(({ isOpen, exit }) => <TimeSelectPopover open={isOpen} setOpen={exit} />);
                    }}
                >
                    <p className={time ? 'text-uiBlack' : 'text-gray-200'}>{time?.length ? time : '선택되지 않음'}</p>
                </ReservationInput>
                {/* <TimeSelectPopover open={true} setOpen={exit} /> */}
            </div>
            <Spacing direction="vertical" size={17} />
            <div className="w-full h-fit">
                <Price price={20000} />
            </div>
            <Spacing direction="vertical" size={20} />
            <div className="w-full flex justify-between gap-3">
                <Button variant="outline">
                    <ShoppingBag />
                </Button>
                <Button variant="default">구매하기</Button>
            </div>
        </div>
    );
}

export function Price({ price }: { price: number }) {
    return (
        <div className="flex gap-1 items-end w-full font-semibold justify-end">
            <p className="text-uiGray text-xl pb-[2px]">총</p>
            <p className="text-uiBlack text-3xl">{new Intl.NumberFormat('ko-KR').format(price)}원</p>
        </div>
    );
}

export function Button({ children, variant }: { children: ReactNode; variant: 'default' | 'outline' }) {
    return (
        <button
            className={clsx(
                variant === 'outline'
                    ? 'border border-[#E4E4E4] rounded-lg flex justify-center items-center'
                    : 'bg-main text-white',
                'w-full h-12 rounded-lg flex justify-center items-center'
            )}
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
