import React, { useState } from 'react';
import heartIcon from "../../.././assets/heartIcon.svg";
import filledHeartIcon from "../../.././assets/filledHeartIcon.svg";
import chilgok from "../../.././assets/main-chilgok.svg";
import tongyeong from "../../.././assets/main-tongyeong.svg";
import chilgok2 from "../../.././assets/main-chilgok2.svg";
import bosung from "../../.././assets/main-bosung.svg";
import star from "../../.././assets/start.svg";

const PopularActivitySlide: React.FC = () => {
  const [scrapStatus, setScrapStatus] = useState<boolean[]>([false, false, false, false]);

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

  return (
    <div className="relative w-[100vw] h-[750px] bg-gradient-to-r from-[#F7FEF5] to-[#FFFFFF] flex flex-col pt-[10rem]">
        {/* Title */}
        <h2 className="text-[30px] font-regular text-[#000000] text-left pl-[18rem]">인기 액티비티</h2>

        {/* Items List */}
        <div className="flex gap-12 w-full justify-start pl-[18rem] pt-[3rem]">
            {items.map((item, index) => (
            <div key={index} className="w-[238px] h-auto rounded-lg flex-shrink-0">
                <div className="relative">
                <img src={item.img} alt={item.title} className="w-full h-[238px] object-cover rounded-lg" />
                    <img src={scrapStatus[index] ? filledHeartIcon : heartIcon} alt="heart icon" 
                    className="w-[24px] h-[22px] absolute top-4 right-4 w-8 h-8 focus:outline-none background-color transparent" 
                    onClick={() => handleScrapClick(index)}
                    />
                </div>
                <div className="p-4">
                <h3 className="text-lg font-regular text-gray-800 mb-2">{item.title}</h3>
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
