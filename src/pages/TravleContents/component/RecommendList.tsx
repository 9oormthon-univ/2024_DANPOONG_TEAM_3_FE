import React from 'react';
import healingImage1 from '../../../assets/healing1.svg';
import healingImage2 from '../../../assets/healing2.svg';
import healingImage3 from '../../../assets/healing3.svg';
import healingImage4 from '../../../assets/healing4.svg';
import adventureImage1 from '../../../assets/adventure1.svg';
import adventureImage2 from '../../../assets/adventure2.svg';
import adventureImage3 from '../../../assets/adventure3.svg';
import adventureImage4 from '../../../assets/adventure4.svg';
import memoryImage1 from '../../../assets/memory1.svg';
import memoryImage2 from '../../../assets/memory2.svg';
import memoryImage3 from '../../../assets/memory3.svg';
import memoryImage4 from '../../../assets/memory4.svg';

const RecommendList: React.FC<{ concept: string; region: string; date: string }> = ({ concept, region, date }) => {
  const conceptDetails = {
    '조용한 힐링을 원해요': {
      color: '#59C642',
      title: '조용한 힐링을 원하시는 분',
      descriptionLeft: '바쁜 생활 속 힐링이 필요하신가요?\n일상에서 벗어나 잠시 모든 일은 잊고 나에게만 집중해보아요!',
      descriptionRight: '내가 주인공이 되는 여행\n몸도 마음도 건강해질거에요!',
      recommendations: [
        { image: healingImage1 },
        { image: healingImage2 },
        { image: healingImage3 },
        { image: healingImage4 },
      ],
    },
    '색다른 여행을 하고 싶어요': {
      color: '#FF9543',
      title: '색다른 여행을 원하시는 분',
      descriptionLeft:
        '먹고, 관광하고, 숙소로 이동....\n매번 같은 여행에 지루하셨나요?\n지역의 특성을 느낄 수 있는 다양한 체험을 해보시는 건 어떤가요?\nOutOfCity에서 제공하는 다양한 체험을 예약해보세요',
      recommendations: [
        { image: adventureImage1 },
        { image: adventureImage2 },
        { image: adventureImage3 },
        { image: adventureImage4 },
      ],
    },
    '추억이 될 만한 사진을 남기고 싶어요': {
      color: '#7EB9F1',
      title: '추억이 될 만한 사진을 남기고 싶으신 분',
      descriptionLeft:
        '순간을 영원히 남기는 법, 아마 몇 장의 사진이겠죠.\n여행을 마치고 사진을 볼 때마다\n행복한 미소를 짓게 될 거예요.',
      descriptionRight: '아름다운 곳에서 소중한 순간을 기록하고,\n 추억을 간직하세요',
      recommendations: [
        { image: memoryImage1 },
        { image: memoryImage2 },
        { image: memoryImage3 },
        { image: memoryImage4 },
      ],
    },
  };

  // 선택된 컨셉의 정보를 가져옵니다.
  // @ts-ignore
  const selectedDetails = conceptDetails[concept];

  if (!selectedDetails) {
    // 만약 잘못된 값이 전달되었다면
    return <div>잘못된 컨셉입니다. 다시 선택해주세요.</div>;
  }

  return (
    <div className="flex flex-col items-start pl-[18rem] mt-0 w-full">
      {/* Title */}
      <h1 className={`text-[35px] font-semibold mt-8 mb-[2rem]`} style={{ color: selectedDetails.color }}>
        {selectedDetails.title}
      </h1>

      {/* Description */}
      <div className="flex flex-col justify-between w-full mb-[4rem]">
        <p className="text-[20px] text-left font-regular text-gray-400 whitespace-pre-line mb-[1rem]">{selectedDetails.descriptionLeft}</p>
        {selectedDetails.descriptionRight && (
          <p className="text-[20px] text-right font-regular text-gray-400 whitespace-pre-line mt-[1rem] pr-[18rem]">{selectedDetails.descriptionRight}</p>
        )}
      </div>

      {/* Recommendations */}
      <div className="flex gap-8 w-full flex-wrap">
        {/* @ts-ignore */}
        {selectedDetails.recommendations.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`추천 아이템 ${index + 1}`} className="w-[268px] h-[283px] object-cover rounded mb-4" />
          </div>
        ))}
      </div>
    </div>
  );

};

export default RecommendList;
