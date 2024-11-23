import React from 'react';
import footer1 from '../../../assets/silent.svg';
import footer2 from '../../../assets/exteme.svg';
import footer3 from '../../../assets/photo.svg';
import * as types from '../../../types/types'; // types 파일에서 가져옴

const CustomerFooter: React.FC<{ concept: types.ConceptType }> = ({ concept }) => {
  const conceptImages = {
    '조용한 힐링을 원해요': footer1,
    '색다른 여행을 하고 싶어요': footer2,
    '추억이 될 만한 사진을 남기고 싶어요': footer3,
  };

  return (
    <div className="relative w-full h-[300px] bg-white flex items-center">
      <img src={conceptImages[concept]} alt={`${concept} 일러스트`} className="w-full h-full object-cover" />
    </div>
  );
};

export default CustomerFooter;
