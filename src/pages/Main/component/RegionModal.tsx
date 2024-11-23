import React from 'react';
import jeju from "../../.././assets/jeju.svg";
import gangneung from "../../.././assets/gangneung.svg";
import yeosu from "../../.././assets/yeosu.svg";

interface RegionModalProps {
  onSelectRegion: (selectedRegion: string) => void;
}

const RegionModal: React.FC<RegionModalProps> = ({ onSelectRegion }) => {
  const handleSelectRegion = (region: string) => {
    onSelectRegion(region);
  };

  return (
    <div className="absolute top-full mt-0 w-[556px] h-[365px] bg-white shadow-lg rounded-lg p-6 z-20">
      {/* Recent Searches */}
      <h3 className="text-lg font-semibold mb-4">최근 검색한 여행지</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className="bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-700"
          onClick={() => handleSelectRegion('강원도, 강릉')}
        >
          강원도, 강릉
        </button>
        <button
          className="bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-700"
          onClick={() => handleSelectRegion('강원도, 속초')}
        >
          강원도, 속초
        </button>
      </div>
      {/* Popular Destinations */}
      <h3 className="text-lg font-semibold mb-4">지금 인기 여행지 순위</h3>
      <div className="space-y-4 overflow-y-scroll h-[200px]">
        <div className="flex items-center">
          <span className="text-lg font-semibold mr-4">1.</span>
          <span className="text-gray-700">제주도</span>
          <button
            className="ml-auto bg-gray-100 rounded-lg h-[60px] w-[337px] overflow-hidden"
            onClick={() => handleSelectRegion('제주도')}
          >
            <img src={jeju} alt="제주도" className="w-full h-full object-cover" />
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold mr-4">2.</span>
          <span className="text-gray-700">강원도, 강릉</span>
          <button
            className="ml-auto bg-gray-100 rounded-lg h-[60px] w-[337px] overflow-hidden"
            onClick={() => handleSelectRegion('강원도, 강릉')}
          >
            <img src={gangneung} alt="강원도, 강릉" className="w-full h-full object-cover" />
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold mr-4">3.</span>
          <span className="text-gray-700">전라도, 여수</span>
          <button
            className="ml-auto bg-gray-100 rounded-lg h-[60px] w-[337px] overflow-hidden"
            onClick={() => handleSelectRegion('전라도, 여수')}
          >
            <img src={yeosu} alt="전라도, 여수" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionModal;
