import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'; // isBetween 플러그인 추가

dayjs.extend(isBetween); // 플러그인 확장

interface CalendarModalProps {
  onSelectDateRange: (startDate: string, endDate: string) => void;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onSelectDateRange, onClose }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedStartDate, setSelectedStartDate] = useState<dayjs.Dayjs | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<dayjs.Dayjs | null>(null);

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (day: dayjs.Dayjs) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      // 시작 날짜를 선택하거나 새로운 범위 선택 시작
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      // 종료 날짜 선택
      if (day.isAfter(selectedStartDate)) {
        setSelectedEndDate(day);
      } else {
        setSelectedStartDate(day);
      }
    }
  };

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.startOf('week');
  const endDay = endOfMonth.endOf('week');

  const calendarDays: dayjs.Dayjs[] = [];
  let day = startDay;
  while (day.isBefore(endDay, 'day')) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // 모달 외부 클릭 시 이벤트 핸들러
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.calendar-modal')) {
        if (selectedStartDate && selectedEndDate) {
          onSelectDateRange(selectedStartDate.format('YYYY-MM-DD'), selectedEndDate.format('YYYY-MM-DD'));
        } else if (selectedStartDate) {
          onSelectDateRange(selectedStartDate.format('YYYY-MM-DD'), selectedStartDate.format('YYYY-MM-DD'));
        }
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedStartDate, selectedEndDate, onSelectDateRange, onClose]);

  return (
    <div className="absolute top-full mt-4 w-[436px] h-[379px] bg-white shadow-lg rounded-lg p-6 calendar-modal">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePreviousMonth}>
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        </button>
        <span className="text-lg font-semibold">{currentDate.format('YYYY년 MM월')}</span>
        <button onClick={handleNextMonth}>
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-700 mb-4">
        {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
          <span key={day} className="font-medium">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarDays.map((day) => {
          const isSelected =
            selectedStartDate && selectedEndDate
              ? day.isBetween(selectedStartDate, selectedEndDate, 'day', '[]')
              : selectedStartDate && day.isSame(selectedStartDate, 'day');
          return (
            <button
              key={day.format('YYYY-MM-DD')}
              onClick={() => handleDateClick(day)}
              className={`w-full h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isSelected ? 'bg-[#59C642] text-white' : day.isSame(currentDate, 'month') ? 'text-gray-900' : 'text-gray-400'
              } hover:bg-[#59C642] hover:text-white`}
            >
              {day.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarModal;
