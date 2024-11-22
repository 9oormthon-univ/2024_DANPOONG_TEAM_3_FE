import React from 'react';

const RecommendList: React.FC<{ concept: string; region: string; date: string }> = ({ concept, region, date }) => {
  const recommendations = [
    // 가상의 여행 추천 데이터를 설정
    { title: `${region} - 추천 여행 1`, description: `${concept}을(를) 위한 추천` },
    { title: `${region} - 추천 여행 2`, description: `${concept}을(를) 위한 추천` },
    { title: `${region} - 추천 여행 3`, description: `${concept}을(를) 위한 추천` },
    { title: `${region} - 추천 여행 4`, description: `${concept}을(를) 위한 추천` },
  ];

  return (
    <div className="flex gap-8">
      {recommendations.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendList;
