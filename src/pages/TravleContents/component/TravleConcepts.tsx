import React, { useState } from 'react';

const TravleConcepts: React.FC<{ onSelectConcept: (concept: string) => void }> = ({ onSelectConcept }) => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const handleClick = (concept: string) => {
    setSelectedConcept(concept);
    onSelectConcept(concept);
  };

  return (
    <div className="relative w-[100vw] h-[630px] bg-white flex flex-col items-start pl-[18rem] py-12 pt-[8rem]">
      {/* Title */}
      <h2 className="text-[30px] font-medium text-[#59C642] mb-2">여행가서 뭘 할 지 모르겠다면</h2>
      <h1 className="text-[35px] font-bold text-[#59C642] mb-[10rem]">당신이 원하는 이번 여행은 무엇인가요?</h1>

      {/* Buttons */}
      <div className="flex space-x-8 text-center text-gray-500 text-[20px] mb-[5rem]">
      {['조용한 힐링을 원해요', '색다른 여행을 하고 싶어요', '추억이 될 만한 사진을 남기고 싶어요'].map((concept, index) => (
        <React.Fragment key={index}>
            <button
            onClick={() => handleClick(concept)}
            className={`text-[20px] font-regular text-gray-500 hover:text-[#59C642] bg-transparent border-none focus:outline-none relative ${
                selectedConcept === concept ? 'after:block after:absolute after:top-[-10px] after:left-[-10px] after:w-[163px] after:h-[77px] after:bg-[#57A061] after:opacity-31' : ''
            }`}
            >
            <span className="block">{concept.split(' ')[0]}</span>
            <span className="block">{concept.split(' ')[1]}</span>
            </button>
            {index < 2 && (
            <div key={`divider-${index}`} className="border-l-2 border-gray-300 h-full"></div>
            )}
        </React.Fragment>
      ))}
      </div>
    </div>
  );
};

export default TravleConcepts;
