import React, { useState } from 'react';
import SearchIcon from "../../.././assets/main-search.svg";
import CalendarIcon from "../../.././assets/main-calendar.svg";
import LocationIcon from "../../.././assets/main-location.svg";
import PeopleIcon from "../../.././assets/main-people.svg";
import RegionModal from './RegionModal.tsx';
import CalendarModal from './CalendarModal.tsx';
import PeopleModal from './PeopleModal.tsx';

interface SearchBarProps {
    onSearchComplete: (region: string, date: string, adultCount: number, childCount: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchComplete }) => {
  // 기본값 설정
  const [region, setRegion] = useState<string>('강원도, 강릉');
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isRegionInputFocused, setIsRegionInputFocused] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<string>('11월 29일 - 12월 30일');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  // 엔터키 입력 시 모달 닫기
  const handleRegionKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsRegionModalOpen(false);
    }
  };

  // 외부 클릭 시 모달 닫기
  const handleOutsideClick = () => {
    setIsRegionModalOpen(false);
    setIsRegionInputFocused(false);
    setIsCalendarModalOpen(false);
    setIsPeopleModalOpen(false);
  };

  const handleSearchClick = () => {
    if (region && selectedDateRange !== '일정') {
      onSearchComplete(region, selectedDateRange, adultCount, childCount);
    } else {
      alert('여행지역과 일정을 모두 선택해주세요.');
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-12 z-10">
      <div className="w-[1280px] h-[82px] bg-white rounded-full border-2 border-green-500 flex items-center px-4 space-x-4">
        {(isRegionModalOpen || isCalendarModalOpen || isPeopleModalOpen) && (
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={handleOutsideClick} // 외부 클릭 처리
          />
        )}

        {/* 여행지역 검색창 */}
        <div
          className={`flex justify-between items-center w-1/3 px-4 py-2 rounded-[12px] ${
            isRegionInputFocused ? 'bg-transparent border border-black' : 'bg-gray-100'
          }`}
        >
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            onFocus={() => {
              setIsRegionModalOpen(true);
              setIsRegionInputFocused(true);
            }}
            onKeyDown={handleRegionKeyDown}
            className="flex-1 outline-none bg-transparent text-black"
            placeholder="가고싶은 여행지를 입력하세요"
          />
          <img src={LocationIcon} className="h-5 w-5 text-gray-500 ml-2" alt="location icon" />
        </div>
        {isRegionModalOpen && (
          <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[436px] z-50" onClick={(e) => e.stopPropagation()}>
            <RegionModal
              onSelectRegion={(selectedRegion: string) => {
                setRegion(selectedRegion);
                setIsRegionModalOpen(false);
              }}
            />
          </div>
        )}

        {/* 일정 검색창 */}
        <div className="relative flex w-1/3">
          <div
            className={`flex justify-between items-center w-full px-4 py-2 cursor-pointer rounded-[12px] ${
              isCalendarModalOpen ? 'bg-transparent border border-black' : 'bg-gray-100'
            }`}
            onClick={() => setIsCalendarModalOpen(true)}
          >
            <span className="text-[#222222]">{selectedDateRange}</span>
            <img src={CalendarIcon} className="h-5 w-5 text-gray-500 ml-2" alt="calendar icon" />
          </div>

          {isCalendarModalOpen && (
            <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[436px] z-50" onClick={(e) => e.stopPropagation()}>
              <CalendarModal
                onSelectDateRange={(startDate: string, endDate: string) => {
                  setSelectedDateRange(`${startDate} ~ ${endDate}`);
                  setIsCalendarModalOpen(false);
                }}
                onClose={() => setIsCalendarModalOpen(false)}
              />
            </div>
          )}
        </div>

        {/* 인원 검색창 */}
        <div
          className={`relative flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer rounded-[12px] ${
            isPeopleModalOpen ? 'bg-transparent border border-black' : 'bg-gray-100'
          }`}
          onClick={() => setIsPeopleModalOpen(true)}
        >
          <span className="text-black">{adultCount > 0 ? `성인 ${adultCount}명` : '인원'}</span>
          {childCount > 0 && <span className="text-black ml-2">, 어린이 {childCount}명</span>}
          <img src={PeopleIcon} className="h-5 w-5 text-gray-500 ml-auto" alt="people icon" />

          {isPeopleModalOpen && (
            <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[250px] z-50" onClick={(e) => e.stopPropagation()}>
              <PeopleModal
                adultCount={adultCount}
                childCount={childCount}
                setAdultCount={setAdultCount}
                setChildCount={setChildCount}
              />
            </div>
          )}
        </div>

        {/* 검색 버튼 */}
        <div onClick={handleSearchClick} className="cursor-pointer">
          <img src={SearchIcon} className="h-[56px] w-[56px]" alt="search icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
