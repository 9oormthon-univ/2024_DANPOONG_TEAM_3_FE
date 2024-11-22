import React, { useState } from 'react';
import RegionModal from '.././component/RegionModal';
import CalendarModal from '.././component/CalendarModal';
import CalendarIcon from "../../.././assets/main-calendar.svg";
import LocationIcon from "../../.././assets/main-location.svg";
import SearchIcon from "../../.././assets/travle-search.svg";

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
    <div className="w-full flex flex-col items-center mt-2 mb-[15rem]">
      {/* 안내 문구 */}
      <div className="w-[1080px] flex flex-col items-start pl-[5rem]">
        <p className="text-gray-500 text-[16px] mb-4">
          여행지와 일정을 입력하면 당신이 원하는 곳을 찾아드립니다.
        </p>
        {/* 검색창 */}
        <div className="relative w-[1080px] h-[82px] bg-transparent flex items-center space-x-4 z-10">
          {/* 여행지역 검색창 */}
          <div
            onClick={() => setIsRegionModalOpen(true)}
            className="w-[361px] h-[51px] flex items-center px-4 bg-white border border-gray-300 rounded-[12px] cursor-pointer"
          >
            <span className="flex-1 text-left text-gray-500">{region}</span>
            <img src={LocationIcon} className="h-[24px] w-[24px] text-black-500" alt="location icon" />
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
          <div
            onClick={() => setIsCalendarModalOpen(true)}
            className="w-[361px] h-[51px] flex items-center px-4 bg-white border border-gray-300 rounded-[12px] cursor-pointer"
          >
            <span className="flex-1 text-left text-gray-500">{date}</span>
            <img src={CalendarIcon} className="h-[24px] w-[24px] text-black-500" alt="calendar icon" />
          </div>
          {isCalendarModalOpen && (
            <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[436px]">
                <CalendarModal
                onSelectDate={(selectedDate: string) => {
                    setDate(selectedDate);
                    setIsCalendarModalOpen(false);
                }}
                />
            </div>
          )}

          {/* 검색 버튼 */}
          <button onClick={handleSearchClick} className="bg-transparent border-none focus:outline-none">
            <img src={SearchIcon} className="h-[51px] w-[50px]" alt="search icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;