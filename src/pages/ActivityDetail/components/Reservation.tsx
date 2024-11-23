import { ReactNode, useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Calendar } from '@/components/ui/calendar';
import { Spacing } from '@/components/common/Spacing';
import { MAX_ADULT_COUNT, MAX_CHILD_COUNT } from '../constant';
import { GuestCounter } from './Counter';
import { ReservationForm } from './ReservationForm';

export function Reservation() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [time] = useState('');

    return (
        <div className="flex w-full justify-between">
            <SectionLayout>
                <SectionTitle>이용 날짜 선택</SectionTitle>
                <Spacing direction="vertical" size={20} />
                <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateChange}
                    className="rounded-md border w-[22rem] h-fit py-8 px-5 border-none"
                />
            </SectionLayout>
            <SectionLayout>
                <SectionTitle>인원 선택</SectionTitle>
                <Spacing direction="vertical" size={20} />
                <div className="w-[30rem] h-full">
                    <GuestCounter
                        adultCount={adultCount}
                        childCount={childCount}
                        onAdultAdd={handleAdultAdd}
                        onAdultSubtract={handleAdultSubtract}
                        onChildAdd={handleChildAdd}
                        onChildSubtract={handleChildSubtract}
                    />
                    <Spacing direction="vertical" size={62} />
                    <ReservationForm
                        selectedDate={selectedDate}
                        adultCount={adultCount}
                        childCount={childCount}
                        time={time}
                    />
                </div>
            </SectionLayout>
        </div>
    );

    function handleDateChange(date: Date | undefined) {
        setSelectedDate(date);
    }

    function handleAdultAdd() {
        if (adultCount < MAX_ADULT_COUNT) {
            setAdultCount(adultCount + 1);
        }
    }

    function handleAdultSubtract() {
        if (adultCount > 0) {
            setAdultCount(adultCount - 1);
        }
    }

    function handleChildAdd() {
        if (adultCount < MAX_CHILD_COUNT) {
            setChildCount(childCount + 1);
        }
    }

    function handleChildSubtract() {
        if (childCount > 0) {
            setChildCount(childCount - 1);
        }
    }
}

export function SectionLayout({ children }: { children: ReactNode }) {
    return <div className="flex flex-col items-start">{children}</div>;
}
