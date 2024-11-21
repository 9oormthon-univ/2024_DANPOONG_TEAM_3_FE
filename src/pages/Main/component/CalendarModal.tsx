import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import dayjs from 'dayjs';

const CalendarModal: React.FC<{ onSelectDate: (date: string) => void }> = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  
    const handlePreviousMonth = () => {
      setCurrentDate(currentDate.subtract(1, 'month'));
    };
  
    const handleNextMonth = () => {
      setCurrentDate(currentDate.add(1, 'month'));
    };
  
    const handleDateClick = (day: dayjs.Dayjs) => {
      onSelectDate(day.format('YYYY-MM-DD'));
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
  
    return (
      <div className="absolute top-full mt-4 w-[436px] h-[379px] bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePreviousMonth}>
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <span className="text-lg font-semibold">
            {currentDate.format('YYYY년 MM월')}
          </span>
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
          {calendarDays.map((day) => (
            <button
              key={day.format('YYYY-MM-DD')}
              onClick={() => handleDateClick(day)}
              className={`w-full h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#59C642] hover:text-white ${
          day.isSame(currentDate, 'month') ? 'text-gray-900' : 'text-gray-400'
        } ${
          selectedDate && day.isSame(selectedDate, 'day') ? 'bg-[#59C642] text-white' : ''
        }`}
            >
              {day.date()}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default CalendarModal;
  