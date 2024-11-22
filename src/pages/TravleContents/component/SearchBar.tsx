import React, { useState } from 'react';
import RegionModal from '.././component/RegionModal';
import CalendarModal from '.././component/CalendarModal';

const SearchBar: React.FC<{ onSearchComplete: (region: string, date: string) => void }> = ({ onSearchComplete }) => {
  const [region, setRegion] = useState<string>('여행지역');
  const [date, setDate] = useState<string>('일정');
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  const handleSearchClick = () => {
    if (region !== '여행지역' && date !== '일정') {
      onSearchComplete(region, date);
    } else {
      alert('여행지역과 일정을 모두 선택해주세요.');
    }
  };

  return (
    <div className="relative w-[1080px] h-[82px] bg-white rounded-full border-2 border-green-500 flex items-center px-4 space-x-4 z-10">
      {/* 여행지역 검색창 */}
      <div onClick={() => setIsRegionModalOpen(true)} className="cursor-pointer">
        <span>{region}</span>
      </div>
      {isRegionModalOpen && (
        <RegionModal
          onSelectRegion={(selectedRegion: string) => {
            setRegion(selectedRegion);
            setIsRegionModalOpen(false);
          }}
        />
      )}

      {/* 일정 검색창 */}
      <div onClick={() => setIsCalendarModalOpen(true)} className="cursor-pointer">
        <span>{date}</span>
      </div>
      {isCalendarModalOpen && (
        <CalendarModal
          onSelectDate={(selectedDate: string) => {
            setDate(selectedDate);
            setIsCalendarModalOpen(false);
          }}
        />
      )}

      {/* 검색 버튼 */}
      <button onClick={handleSearchClick}>검색</button>
    </div>
  );
};

export default SearchBar;
