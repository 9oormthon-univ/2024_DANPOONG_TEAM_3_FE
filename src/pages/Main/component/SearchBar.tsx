import React, { useState } from 'react';
import SearchIcon from "../../.././assets/main-search.svg";
import CalendarIcon from "../../.././assets/main-calendar.svg";
import LocationIcon from "../../.././assets/main-location.svg";
import PeopleIcon from "../../.././assets/main-people.svg";
import RegionModal from './RegionModal.tsx';

const SearchBar: React.FC = () => {
  const [region, setRegion] = useState('여행지역');
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isRegionInputFocused, setIsRegionInputFocused] = useState(false);

  const handleRegionClick = () => {
    setRegion('가고싶은 여행지를 입력하세요');
    setIsRegionModalOpen(true);
    setIsRegionInputFocused(true);
  };

  const handleRegionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value);
  };

  const handleOutsideClick = () => {
    setIsRegionModalOpen(false);
    setIsRegionInputFocused(false);
  };

  const handleSearchClick = () => {
    alert('찾으시는 조건에 맞는 여행 상품을 알려드리겠습니다!');
    // navigate기능으로 전환 해야 함
  };

  return (
    <div className="relative w-[1080px] h-[82px] bg-white rounded-full border-2 border-green-500 flex items-center px-4 space-x-4">
      
      {isRegionModalOpen && (
        <div
          className="fixed inset-0 z-10 bg-transparent"
          onClick={handleOutsideClick}
        />
      )}

      
    <div className={`flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer rounded-full 
        ${isRegionInputFocused
            ? 'bg-transparent border border-black'
            : 'bg-gray-100'
        }`}
        onClick={handleRegionClick}
    >
        <input
            type="text"
            value={region}
            onChange={handleRegionInputChange}
            className={`flex-1 outline-none ${
            isRegionInputFocused ? 'bg-transparent' : 'bg-gray-100'
            } text-gray-700`}
            placeholder="가고싶은 여행지를 입력하세요"
        /> 
        <img src={LocationIcon} className="h-5 w-5 text-gray-500 ml-2" />
    </div>

    <div className="flex justify-between items-center w-1/3 bg-gray-100 rounded-full px-4 py-2 cursor-pointer">
        <span className="text-gray-700">일정</span>
        <img src={CalendarIcon} className="h-5 w-5 text-gray-500 ml-2" />
    </div>

    <div className="flex justify-between items-center w-1/3 bg-gray-100 rounded-full px-4 py-2 cursor-pointer">
        <span className="text-gray-700">인원</span>
        <img src={PeopleIcon} className="h-5 w-5 text-gray-500 ml-2" />
    </div>

      <div onClick={handleSearchClick} className="cursor-pointer">
        <img src={SearchIcon} className="h-[56px] w-[56px]" alt="Search Icon" />
      </div>

      {isRegionModalOpen && <RegionModal />}
    </div>
  );
};

export default SearchBar;
