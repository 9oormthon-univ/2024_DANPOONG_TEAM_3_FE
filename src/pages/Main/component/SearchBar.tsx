//메인 검색바
import React, { useState } from 'react';
import SearchIcon from "../../.././assets/main-search.svg";
import CalendarIcon from "../../.././assets/main-calendar.svg";
import LocationIcon from "../../.././assets/main-location.svg";
import PeopleIcon from "../../.././assets/main-people.svg";
import RegionModal from './RegionModal.tsx';
import CalendarModal from './CalendarModal';
import PeopleModal from './PeopleModal';

const SearchBar: React.FC = () => {
  const [region, setRegion] = useState('여행지역');
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isRegionInputFocused, setIsRegionInputFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const handleOutsideClick = () => {
    setIsRegionModalOpen(false);
    setIsRegionInputFocused(false);
    setIsCalendarModalOpen(false);
    setIsPeopleModalOpen(false); // 추가: 외부 클릭 시 PeopleModal 닫기
  };

  const handleSearchClick = () => {
    alert('찾으시는 조건에 맞는 여행 상품을 알려드리겠습니다!');
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
        className={`flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer rounded-full ${
          isRegionInputFocused ? 'bg-transparent border border-black' : 'bg-gray-100'
        }`}
        onClick={() => {
          setRegion('가고싶은 여행지를 입력하세요');
          setIsRegionModalOpen(true);
          setIsRegionInputFocused(true);
        }}
      >
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={`flex-1 outline-none ${
            isRegionInputFocused ? 'bg-transparent' : 'bg-gray-100'
          } text-gray-700`}
          placeholder="가고싶은 여행지를 입력하세요"
        />
        <img src={LocationIcon} className="h-5 w-5 text-gray-500 ml-2" />
      </div>

      {/* 일정 검색창 */}
      <div className="relative flex w-1/3">
        <div
          className={`flex justify-between items-center w-full px-4 py-2 cursor-pointer rounded-full ${
            isCalendarModalOpen ? 'bg-transparent border border-black' : 'bg-gray-100'
          }`}
          onClick={() => setIsCalendarModalOpen(true)}
        >
          <span className="text-[#222222]">{selectedDate ? selectedDate : '일정'}</span>
          <img src={CalendarIcon} className="h-5 w-5 text-gray-500 ml-2" />
        </div>

        {isCalendarModalOpen && (
          <div className="absolute top-full mt-0 left-1/2 transform -translate-x-1/2 w-[436px]">
            <CalendarModal
              onSelectDate={(date) => {
                setSelectedDate(date);
                setIsCalendarModalOpen(false);
              }}
            />
          </div>
        )}
      </div>

      {/* 인원 검색창 */}
      <div
        className={`relative flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer rounded-full ${
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
        <img src={SearchIcon} className="h-[56px] w-[56px]" alt="Search Icon" />
      </div>

      {isRegionModalOpen && <RegionModal />}
    </div>
  );
};

export default SearchBar;