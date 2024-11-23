import React, { useState } from 'react';
import star from "../../.././assets/start.svg";
import profile from "../../.././assets/main-profile.svg";
import heartIcon from "../../.././assets/heartIcon.svg";
import filledHeartIcon from "../../.././assets/filledHeartIcon.svg";

type Activity = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  reviewPreview: string;
};

const SearchList: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  const [scrapStatus, setScrapStatus] = useState<boolean[]>(Array(activities.length).fill(false));

  const handleScrapClick = (index: number) => {
    setScrapStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = !updatedStatus[index];
      return updatedStatus;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-8 mx-auto w-[1160px] text-left mb-[100px]">
      {activities.map((activity, index) => (
        <div key={activity.id} className="relative flex border border-none rounded-lg overflow-hidden w-full h-auto cursor-pointer transition-shadow duration-300 ease-in-out">
          {/* 이미지 컨테이너 */}
          <div className="relative w-1/2 h-full">
            {/* 이미지 */}
            <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
            
            {/* 하트 아이콘 */}
            <img
              src={scrapStatus[index] ? filledHeartIcon : heartIcon}
              alt="heart icon"
              className="w-[24px] h-[24px] absolute top-4 right-4 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 버블링 방지
                handleScrapClick(index);
              }}
            />
          </div>

          {/* 텍스트 컨테이너 */}
          <div className="flex flex-col justify-start p-6 w-1/2">
            {/* 제목 */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{activity.title}</h3>

            {/* 가격 */}
            <span className="text-2xl font-bold text-[#59C642] mb-2">{activity.price}</span>

            {/* 별점 & 리뷰 */}
            <div className="flex items-center mb-2">
              <img src={star} alt="star-icon" className="w-[18px] h-[18px] mr-1" />
              <span className="text-base font-semibold text-gray-800">{activity.rating}</span>
              <span className="text-sm text-gray-500 ml-2">리뷰 {activity.reviewCount}개</span>
            </div>

            {/* 리뷰 미리보기 */}
            <div className="flex flex-col items-start mt-4">
              <div className="flex items-start mb-2">
                <img src={profile} alt="profile-icon" className="w-[22px] h-[22px] mr-2" />
                <p className="text-sm text-gray-600">{activity.reviewPreview}</p>
              </div>
              {/* 두 번째 아이템만 추가 리뷰 */}
              {index === 1 && (
                <div className="flex items-start">
                  <img src={profile} alt="profile-icon" className="w-[22px] h-[22px] mr-2 mt-2" />
                  <p className="text-sm text-gray-600 mt-2">훌륭한 가이드와 함께 했습니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
