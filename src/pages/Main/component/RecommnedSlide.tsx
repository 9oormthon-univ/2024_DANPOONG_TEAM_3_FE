import React, { useState } from 'react';
import mountainIcon from "../../.././assets/main-mountain.svg";
import seaIcon from "../../.././assets/main-sea.svg";
import countryIcon from "../../.././assets/main-country.svg";
import chungnamImg from "../../.././assets/main-chungnam.svg";
import damyangImg from "../../.././assets/main-damyang.svg";
import yangpyeongImg from "../../.././assets/main-yangpyeong.svg";
import namyangImg from "../../.././assets/main-namyang.svg";

const RecommendSlide: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof items>('mountain'); // 초기값 수정
  
  const categories = [
    { label: '산으로', value: 'mountain', icon: mountainIcon },
    { label: '바다로', value: 'sea', icon: seaIcon },
    { label: '농촌으로', value: 'farm', icon: countryIcon },
  ];

  const items = {
    mountain: [
      { title: '[충남 태안] 어촌 바다에서 즐기는 낚시 체험', price: '50,000원', img: chungnamImg },
      { title: '[전남 담양] 200평이 넓은 마당이 있는 \u2018소예방\u2019', price: '120,000원', img: damyangImg },
      { title: '[경기 양평] 여름 필수 코스! 수박 수확 체험으로 시원한 하루', price: '20,000원', img: yangpyeongImg },
      { title: '[경기 남양주] 아늑한 감성의 \u2018그랜마 하우스\u2019', price: '200,000원', img: namyangImg },
    ],
    sea: [
      { title: '[충남 태안] 어촌 바다에서 즐기는 낚시 체험', price: '50,000원', img: chungnamImg },
      { title: '[전남 담양] 200평이 넓은 마당이 있는 \u2018소예방\u2019', price: '120,000원', img: damyangImg },
      { title: '[경기 양평] 여름 필수 코스! 수박 수확 체험으로 시원한 하루', price: '20,000원', img: yangpyeongImg },
      { title: '[경기 남양주] 아늑한 감성의 \u2018그랜마 하우스\u2019', price: '200,000원', img: namyangImg },
    ],
    farm: [
      { title: '[충남 태안] 어촌 바다에서 즐기는 낚시 체험', price: '50,000원', img: chungnamImg },
      { title: '[전남 담양] 200평이 넓은 마당이 있는 \u2018소예방\u2019', price: '120,000원', img: damyangImg },
      { title: '[경기 양평] 여름 필수 코스! 수박 수확 체험으로 시원한 하루', price: '20,000원', img: yangpyeongImg },
      { title: '[경기 남양주] 아늑한 감성의 \u2018그랜마 하우스\u2019', price: '200,000원', img: namyangImg },
    ],
  };

  const handleCategoryClick = (value: keyof typeof items) => {
    setSelectedCategory(value);
  };

  return (
    <div className="relative w-[100vw] h-[767px] bg-gradient-to-r from-[#F7FEF5] to-[#FFFFFF] flex flex-col items-center pt-8 pb-8">
      {/* Title */}
      <h2 className="text-[30px] font-semibold text-green-500 mt-8 mb-14">도시를 떠나 새로운 경험을 만끽해보세요!</h2>

      {/* Category Buttons */}
      <div className="flex space-x-16 mb-[5rem]">
        {categories.map((category) => (
          <div key={category.value} className="flex flex-col items-center">
            <button
              onClick={() => handleCategoryClick(category.value as keyof typeof items)}
              className={`w-[108px] h-[108px] rounded-[20px] flex items-center justify-center border focus:outline-none text-center cursor-pointer transition-all 
                ${selectedCategory === category.value ? 'bg-[#E5FFDF] border-[#59C642]' : 'bg-white border-[#CACACA]'}
              `}
            >
              <img src={category.icon} alt={category.label} className="w-[80px] h-[80px]" />
            </button>
            <span className={`mt-2 text-[17px] ${selectedCategory === category.value ? 'font-semibold text-[#59C642]' : 'font-regular text-gray-700'}`}>
              {category.label}
            </span>
          </div>
        ))}
      </div>
      {/* Experience Items Slider */}
      <div className="relative w-full flex items-center px-12 justify-center">
        {/* <span className="text-[18px] font-regular text-gray-500 mt-4">전체보기</span> */}
        {/* Left Arrow Button */}
        <button className="absolute top-1/4 left-20 w-[45px] h-[45px] bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="material-icons">＜</span>
        </button>
            
        {/* Items List */}
        <div className="flex gap-12 w-[950px] justify-center">
            {items[selectedCategory]?.map((item, index) => (
            <div key={index} className="w-[238px] h-auto rounded-lg flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-[238px] object-cover rounded-t-lg" />
                <div className="p-4 flex flex-col">
                    <h3 className="font-semibold text-gray-800 text-left mb-2">{item.title}</h3>
                    <p className="text-black-500 text-xl font-bold text-right">{item.price}</p>
                </div>
            </div>
            ))}
        </div>
            
        {/* Right Arrow Button */}
        <button className="absolute top-1/4 right-20 w-[45px] h-[45px] bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="material-icons">＞</span>
        </button>
      </div>
    </div>
  );
};

export default RecommendSlide;