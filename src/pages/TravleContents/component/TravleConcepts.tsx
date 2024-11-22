import React, { useState } from 'react';

const TravleConcepts: React.FC<{ onSelectConcept: (concept: string) => void }> = ({ onSelectConcept }) => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const handleClick = (concept: string) => {
    setSelectedConcept(concept);
    onSelectConcept(concept);
  };

  return (
    <div className="relative w-[100vw] h-[580px] bg-white flex flex-col items-start pl-[11rem] py-12 pt-[11rem]">
      {/* Title */}
      <h2 className="text-[30px] font-medium text-[#59C642] mb-2">여행가서 뭘 할 지 모르겠다면</h2>
      <h1 className="text-[35px] font-bold text-[#59C642] mb-[7rem]">당신이 원하는 이번 여행은 무엇인가요?</h1>

      {/* Buttons */}
      <div className="flex space-x-20 text-center text-gray-500 text-[20px] mb-[5rem] pl-[12rem]">
        {[
          '조용한 힐링을\n원해요',
          '색다른 여행을\n하고 싶어요',
          '추억이 될 만한 사진을\n남기고 싶어요',
        ].map((concept, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => handleClick(concept)}
              className={`w-[200px] h-[100px] rounded-[73px] text-[20px] font-regular flex flex-col items-center justify-center bg-transparent border-none focus:outline-none transition-all duration-300 cursor-pointer ${
                selectedConcept === concept
                  ? 'text-[#59C642] shadow-[0_4px_6px_rgba(87,160,97,0.31)] bg-white'
                  : 'text-gray-500 hover:text-[#59C642]'
              }`}
              style={{
                boxShadow: selectedConcept === concept ? '0px 4px 10px rgba(87, 160, 97, 0.31)' : 'none',
              }}
            >
              {concept.split('\n').map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
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
