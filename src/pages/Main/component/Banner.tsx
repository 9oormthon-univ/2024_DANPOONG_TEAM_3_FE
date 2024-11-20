import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.tsx';
import bg1 from "../../.././assets/main-background.svg";
import bg2 from "../../.././assets/main-background2.svg";

const images = [
  {
    url: bg1,
    textLine1: '도심 속 지친 당신을 위한',
    textLine2: '제주도 한달 살기',
  },
  {
    url: bg1,
    textLine1: '자연과 함께하는',
    textLine2: '강원도 힐링 여행',
  },
  {
    url: bg2,
    textLine1: '새로운 모험을 찾아서',
    textLine2: '남해 바다 여행',
  },
];

const Banner: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="w-full h-[497px] mt-0 overflow-hidden">
        
        <img
          src={images[currentIndex].url}
          alt="Banner Background"
          className="w-full h-[497px] object-cover absolute top-0 left-0 object-center"
        />
        
        <div className="absolute top-[18%] left-[11.2rem] text-left text-white">
          <h1 className="text-[32px] font-semibold leading-tight mb-2">{images[currentIndex].textLine1}</h1>
          <h2 className="text-[35px] font-bold leading-tight">{images[currentIndex].textLine2}</h2>
        </div>

        {/* 여기서 SearchBar 반응형으로 수정하기 */}
        <div className="absolute bottom-[53%] left-[59%] transform -translate-x-1/2 w-[80%]">
          <SearchBar />
        </div>
      </div>
    );
  };
  
  export default Banner;  