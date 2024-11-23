import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mountainIcon from "../../.././assets/main-mountain.svg";
import seaIcon from "../../.././assets/main-sea.svg";
import countryIcon from "../../.././assets/main-country.svg";
import chungnamImg from "../../.././assets/main-chungnam.svg";
import damyangImg from "../../.././assets/main-damyang.svg";
import yangpyeongImg from "../../.././assets/main-yangpyeong.svg";
import namyangImg from "../../.././assets/main-namyang.svg";
import picnic from "../../.././assets/picnic.svg";
import milk from "../../.././assets/milk.svg";
import apple from"../../.././assets/apple.svg";
import hourse from "../../.././assets/hourse.svg";
import yeosu from "../../.././assets/yeosu.jpg";
import jeju from "../../.././assets/jeju.jpg";
import pohang from "../../.././assets/pohang.jpg";
import busan from "../../.././assets/busan.jpg";

const RecommendSlide: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof items>('mountain');

  const categories = [
    { label: '산으로', value: 'mountain', icon: mountainIcon },
    { label: '바다로', value: 'sea', icon: seaIcon },
    { label: '농촌으로', value: 'farm', icon: countryIcon },
  ];

  const items = {
    mountain: [
      { title: '[충남 태안]', contents: '어촌 바다에서 즐기는 낚시 체험', price: '50,000원', img: chungnamImg },
      { title: '[전남 담양]', contents: '200평이 넓은 마당이 있는 소예방', price: '120,000원', img: damyangImg },
      { title: '[경기 양평]', contents: '여름 필수 코스! 수박 수확 체험으로 시원한 하루', price: '20,000원', img: yangpyeongImg },
      { title: '[경기 남양주]', contents: '아늑한 감성의 그랜마 하우스', price: '200,000원', img: namyangImg },
    ],
    farm: [
      { title: '[전남 구례]', contents: '산수유꽃마을에서 즐기는 여유로운 피크닉', price: '10,000원', img: picnic },
      { title: '[전남 구례]', contents: '우유에서 치즈만들기 지리산 치즈랜드', price: '30,000원', img: milk },
      { title: '[경북 문경]', contents: '문경에서만 맛볼 수 있는 달콤한 사과 수확!', price: '20,000원', img: apple },
      { title: '[강원 춘천]', contents: '초원목장에서 동물들과 행복한 하루!', price: '15,000원', img: hourse },
    ],
    sea: [
      { title: '[전남 여수]', contents: '여수 바다 카약 체험 및 일몰 감상', price: '45,000원', img: yeosu },
      { title: '[제주도 서귀포]', contents: '서귀포 바다에서 즐기는 돌고래 투어', price: '70,000원', img: jeju },
      { title: '[경북 포항]', contents: '포항 호미곶에서 떠오르는 일출 감상 및 해양 체험', price: '30,000원', img: pohang },
      { title: '[부산 해운대]', contents: '해운대 서핑 레슨 및 장비 대여', price: '60,000원', img: busan },
    ]    
  };

  const handleCategoryClick = (value: keyof typeof items) => {
    setSelectedCategory(value);
  };

  const handleViewAllClick = () => {
    navigate(`/activity`);
  };

  return (
    <div className="relative w-[100vw] h-[800px] bg-gradient-to-r from-[#F7FEF5] flex flex-col items-center pt-8 pb-8">
      {/* Title */}
      <h2 className="text-[30px] font-semibold text-green-500 mt-8 mb-14">도시를 떠나 새로운 경험을 만끽해보세요!</h2>

      {/* Category Buttons */}
      <div className="flex space-x-16 mb-[5rem]">
        {categories.map((category) => (
          <div key={category.value} className="flex flex-col items-center">
            <button
              onClick={() => handleCategoryClick(category.value as keyof typeof items)}
              className={`w-[108px] h-[108px] rounded-[20px] flex items-center justify-center border focus:outline-none text-center cursor-pointer transition-all 
                ${selectedCategory === category.value ? 'bg-[#E5FFDF] border-[#59C642]' : 'bg-white border-[#CACACA]'}`}
            >
              <img src={category.icon} alt={category.label} className="w-[80px] h-[80px]" />
            </button>
            <span className={`mt-2 text-[17px] ${selectedCategory === category.value ? 'font-semibold text-[#59C642]' : 'font-regular text-gray-700'}`}>{category.label}</span>
          </div>
        ))}
      </div>

      {/* 전체보기 버튼 */}
      <div className="flex justify-end w-full pr-[19.3rem] mb-5">
        <span className="text-[18px] font-regular text-gray-500 cursor-pointer hover:underline" onClick={handleViewAllClick}>전체보기</span>
      </div>

      {/* Experience Items Slider */}
      <div className="relative w-full flex items-center px-12 justify-center">
        {/* Left Arrow Button */}
        <button className="absolute top-1/4 left-20 w-[45px] h-[45px] bg-white rounded-full shadow-md flex items-center justify-center">
          <span className="material-icons">＜</span>
        </button>

        {/* Items List */}
        <div className="flex gap-12 w-[970px] justify-center">
          {items[selectedCategory]?.map((item, index) => (
            <div key={index} className="w-[238px] h-auto rounded-lg flex-shrink-0">
              <img src={item.img} alt={item.title} className="w-full h-[238px] object-cover rounded-[20px]" />
              <div className="mt-3 flex flex-col">
                <h3 className="text-[20px] font-semibold text-gray-800 text-left mb-2">{item.title}</h3>
                <p className="text-[11px] text-black-500 text-md text-left mb-2">{item.contents}</p>
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
