import React from 'react';
import footer1 from '../../../assets/silent-footer.svg';
import footer2 from '../../../assets/extream-footer.svg';
import footer3 from '../../../assets/photo-footer.svg';
import { ConceptType } from '../../../types/types'; // types 파일에서 가져옴

const CustomerFooter: React.FC<{ concept: ConceptType }> = ({ concept }) => {
  const conceptImages = {
    '조용한 힐링을 원해요': footer1,
    '색다른 여행을 하고 싶어요': footer2,
    '추억이 될 만한 사진을 남기고 싶어요': footer3,
  };

  return (
    <div className="w-full h-[300px] bg-white flex items-center justify-center">
      <img src={conceptImages[concept]} alt={`${concept} 일러스트`} />
    </div>
  );
};

export default CustomerFooter;
