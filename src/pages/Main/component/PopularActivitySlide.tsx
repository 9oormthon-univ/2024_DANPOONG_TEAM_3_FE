import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartIcon from "../../.././assets/heartIcon.svg";
import filledHeartIcon from "../../.././assets/filledHeartIcon.svg";
import chilgok from "../../.././assets/main-chilgok.svg";
import tongyeong from "../../.././assets/main-tongyeong.svg";
import chilgok2 from "../../.././assets/main-chilgok2.svg";
import bosung from "../../.././assets/main-bosung.svg";
import star from "../../.././assets/start.svg";
import sort from "../../.././assets/Sort.svg";

const PopularActivitySlide: React.FC = () => {
  const [scrapStatus, setScrapStatus] = useState<boolean[]>([false, false, false, false]);
  const navigate = useNavigate();
  const items = [
    { title: '[경북 칠곡] 고구마캐기', price: '50,000원', img: chilgok, rating: 4.8 },
    { title: '[경남 통영] 굴따기 체험', price: '12,000원', img: tongyeong, rating: 4.5 },
    { title: '[경북 칠곡] 가을 농촌 체험', price: '18,000원', img: chilgok2, rating: 5 },
    { title: '[전남 보성] 차 만들기', price: '20,000원', img: bosung, rating: 5 },
  ];

  const handleScrapClick = (index: number) => {
    setScrapStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = !updatedStatus[index];
      return updatedStatus;
    });
  };
  
  const handleViewAllClick = () => {
    // 선택된 카테고리를 파라미터로 전달하면서 ActivityPage로 이동
    navigate(`/activity`);
  };

  return (
    <div className="relative w-[100vw] h-[700px] bg-gradient-to-r from-[#F7FEF5] to-[#FFFFFF] flex flex-col pt-[7rem]">
        {/* Title */}
        <h2 className="text-[30px] font-medium text-[#000000] text-left pl-[18rem]">인기 액티비티</h2>
        <div className="flex justify-end w-full pr-[19.3rem] mb-5">
          <span
            className="text-[18px] font-regular text-gray-500 cursor-pointer flex items-center pt-[4rem] pr-[1rem] hover:underline"
            onClick={handleViewAllClick}
          >
            더보기
            <img src={sort} alt="sort icon" className="w-[24px] h-[24px] ml-1" />
          </span>
        </div>
        {/* Items List */}
        <div className="flex text-left gap-12 w-full pl-[18rem] pt-0 mb-1">
            {items.map((item, index) => (
            <div key={index} className="w-[238px] h-auto rounded-lg flex-shrink-0">
                <div className="relative">
                <img src={item.img} alt={item.title} className="w-full h-[238px] object-cover rounded-lg" />
                    <img src={scrapStatus[index] ? filledHeartIcon : heartIcon} alt="heart icon" 
                    className="w-[24px] h-[22px] absolute top-4 right-4 w-8 h-8 focus:outline-none background-color transparent cursor-pointer" 
                    onClick={() => handleScrapClick(index)}
                    />
                </div>
                <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-black text-xl font-semibold">{item.price}</p>
                    <div className="flex items-center">
                    <img src={star} alt="star" className="w-[18px] h-[18px]" />
                    <span className="ml-1 text-gray-700 text-[18px]">{item.rating}</span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
  );
};

export default PopularActivitySlide;
