import React from 'react';

interface PeopleModalProps {
  adultCount: number;
  childCount: number;
  setAdultCount: (count: number) => void;
  setChildCount: (count: number) => void;
}

const PeopleModal: React.FC<PeopleModalProps> = ({ adultCount, childCount, setAdultCount, setChildCount }) => {
  return (
    <div className="absolute top-full mt-4 w-[250px] h-[150px] bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-900 text-left font-regular text-[17px]">성인</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setAdultCount(adultCount > 0 ? adultCount - 1 : 0)}
            className="w-[20px] h-[20px] bg-[#B5F0A8] text-gray-500 rounded-full flex items-center justify-center"
          >
            -
          </button>
          <span className="text-right font-regular text-[17px]">{adultCount}</span>
          <button
            onClick={() => setAdultCount(adultCount + 1)}
            className="w-[20px] h-[20px] bg-[#B5F0A8] text-gray-500 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 text-left font-regular text-[17px]">어린이</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setChildCount(childCount > 0 ? childCount - 1 : 0)}
            className="w-[20px] h-[20px] bg-[#B5F0A8] text-gray-500 rounded-full flex items-center justify-center"
          >
            -
          </button>
          <span className="text-right font-regular text-[17px]">{childCount}</span>
          <button
            onClick={() => setChildCount(childCount + 1)}
            className="w-[20px] h-[20px] bg-[#B5F0A8] text-gray-500 rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <button
        className="w-[220px] h-[35px] bg-[#59C642] text-white rounded-lg flex items-center justify-center mx-auto"
      >
        적용
      </button>
    </div>
  );
};

export default PeopleModal;
