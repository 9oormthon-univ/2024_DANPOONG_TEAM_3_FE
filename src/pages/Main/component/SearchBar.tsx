import React, { useState } from 'react';
import SearchIcon from "../../.././assets/main-search.svg";
import CalendarIcon from "../../.././assets/main-calendar.svg";
import LocationIcon from "../../.././assets/main-location.svg";
import PeopleIcon from "../../.././assets/main-people.svg";
import RegionModal from './RegionModal.tsx';
import CalendarModal from './CalendarModal';
import PeopleModal from './PeopleModal';

const SearchBar: React.FC = () => {
  const [region, setRegion] = useState<string>('');
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isRegionInputFocused, setIsRegionInputFocused] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<string>('일정');
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
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
      alert(`여행지: ${region}, 일정: ${selectedDateRange}, 성인: ${adultCount}, 어린이: ${childCount}`);
    } else {
      alert('여행지역과 일정을 모두 선택해주세요.');
    }
  };

  return (
    <div className="relative w-[1080px] h-[82px] bg-white rounded-full border-2 border-green-500 flex items-center px-4 space-x-4 z-50">
      {(isRegionModalOpen || isCalendarModalOpen || isPeopleModalOpen) && (
        <div
          className="fixed inset-0 z-50 bg-transparent"
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
          className="flex-1 outline-none bg-transparent"
          placeholder="가고싶은 여행지를 입력하세요"
        />
        <img src={LocationIcon} className="h-5 w-5 text-gray-500 ml-2" alt="location icon" />
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
          <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[436px]">
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
        <span className="text-gray-700">인원</span>
        {adultCount > 0 || childCount > 0 ? (
          <span className="text-gray-700 ml-auto">
            {adultCount > 0 ? `성인 ${adultCount}명` : ''}
            {childCount > 0 ? `${adultCount > 0 ? ', ' : ''}어린이 ${childCount}명` : ''}
          </span>
        ) : (
          <img src={PeopleIcon} className="h-5 w-5 text-gray-500 ml-auto" />
        )}

        {isPeopleModalOpen && (
          <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[250px]">
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
  );
};

export default SearchBar;
