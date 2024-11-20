import { ReactNode, useState } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay,
} from 'date-fns';
import { MONTHLY_DESCRIPTION, SEVEN_DAYS } from '../constant';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Approved from '@/assets/Approved.svg?react';
import Declined from '@/assets/Declined.svg?react';

export function Calendar({ tagData }: { tagData: Record<string, string> }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    // 현재 월의 시작과 끝
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);

    // 캘린더 이동
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    // 캘린더 생성
    const generateCalendar = () => {
        const startWeek = startOfWeek(startMonth);
        const endWeek = endOfWeek(endMonth);

        const days = [];
        let day = startWeek;

        while (day <= endWeek) {
            days.push(day);
            day = addDays(day, 1);
        }
        return days;
    };

    const calendarDays = generateCalendar();

    return (
        <div className="p-4 w-[69.75rem]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <ArrowButton onClick={prevMonth}>
                    <ChevronLeftIcon className="hover:text-uiGray" />
                </ArrowButton>
                <div className="flex gap-2 items-end">
                    <h2 className="font-semibold text-2xl text-uiBlack">{format(currentDate, 'MM월')}</h2>
                    <p className="text-sm pb-1 text-uiGray">{MONTHLY_DESCRIPTION[`${format(currentDate, 'MM')}`]}</p>
                </div>
                <ArrowButton onClick={nextMonth}>
                    <ChevronRightIcon className="hover:text-uiGray" />
                </ArrowButton>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
                {SEVEN_DAYS.map((day, idx) => (
                    <div key={idx} className="text-center font-bold">
                        {day}
                    </div>
                ))}
                {calendarDays.map((day, idx) => {
                    const isCurrentMonth = isSameMonth(day, currentDate);
                    const tag = tagData[format(day, 'yyyy-MM-dd')] || null;

                    return <DayBox key={idx} day={day} isCurrentMonth={isCurrentMonth} tag={tag} />;
                })}
            </div>
        </div>
    );
}

function ArrowButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
    return (
        <button onClick={onClick} className="bg-transparent focus:outline-none border-0">
            {children}
        </button>
    );
}

function DayBox({ isCurrentMonth, day, tag }: { isCurrentMonth: boolean; day: Date; tag: string | null }) {
    return (
        <div
            className={`h-28 flex flex-col text-left border px-4 py-2 rounded-md ${
                isCurrentMonth ? 'text-uiBlack' : 'text-uiGray'
            } ${isSameDay(day, new Date()) ? 'border-main' : ''}`}
        >
            <span className="text-sm">{format(day, 'd')}</span>
            {tag && (
                <div className="self-center">
                    {tag === 'approved' ? <Approved /> : tag === 'declined' ? <Declined /> : null}
                </div>
            )}
        </div>
    );
}
