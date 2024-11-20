import React from 'react';
import { useNavigate } from 'react-router-dom';

const TravelConcepts: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative w-[100vw] h-[650px] bg-white flex flex-col items-start pl-[18rem] py-12 pt-[8rem]">
      {/* Title */}
      <h2 className="text-[30px] font-medium text-[#59C642] mb-2">여행가서 뭘 할 지 모르겠다면</h2>
      <h1 className="text-[35px] font-bold text-[#59C642] mb-[10rem]">당신이 원하는 이번 여행은 무엇인가요?</h1>

      {/* Buttons */}
      <div className="flex space-x-8 text-center text-gray-500 text-[20px] mb-[5rem]">
        <button
          onClick={() => handleNavigate('/content/relax')}
          className="text-[20px] font-regular text-gray-500 hover:text-[#59C642] bg-transparent border-none focus:outline-none"
        >
        <div className="pl-[17rem]">
          <span className="block">조용한 힐링을</span>
          <span className="block">원해요</span>
        </div>
        </button>
        <div className="border-l-2 border-gray-300 h-full"></div>
        <button
          onClick={() => handleNavigate('/content/different')}
          className="text-[20px] font-regular text-gray-500 hover:text-[#59C642] bg-transparent border-none focus:outline-none"
        >
          <span className="block">색다른 여행을</span>
          <span className="block">하고 싶어요</span>
        </button>
        <div className="border-l-2 border-gray-300 h-full"></div>
        <button
          onClick={() => handleNavigate('/content/memories')}
          className="text-[20px] font-regular text-gray-500 hover:text-[#59C642] bg-transparent border-none focus:outline-none"
        >
          <span className="block">추억이 될 만한</span>
          <span className="block">사진을 남기고 싶어요</span>
        </button>
      </div>
    </div>
  );
};

export default TravelConcepts;