import React, { useState } from 'react';
import Header from '.././Main/component/Header';
import TravleConcepts from './component/TravleConcepts';
import SearchBar from './component/SearchBar';
import RecommendList from './component/RecommendList';
import CustomerFooter from './component/CustomFooter';
import Footer from ".././Main/component/Footer";
const TravleContents: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [searchData, setSearchData] = useState<{ region: string; date: string } | null>(null);

  const handleConceptSelect = (concept: string) => {
    setSelectedConcept(concept);
  };

  const handleSearchComplete = (region: string, date: string) => {
    setSearchData({ region, date });
  };

  // 컨셉별 그래디언트 색상 정의
  const gradientColors = {
    '조용한 힐링을 원해요': 'from-[#E9FDE4]',
    '색다른 여행을 하고 싶어요': 'from-[#FDECE1]',
    '추억이 될 만한 사진을 남기고 싶어요': 'from-[#E3EAFD]',
  };

  // 선택된 컨셉에 따라 그래디언트 색상 결정
  // @ts-ignore
  const selectedGradient = selectedConcept ? gradientColors[selectedConcept] : 'from-[#FFFFFF] to-[#FFFFFF]';

  return (
    <div className="relative w-full min-h-screen">
      {/* 컨셉별 그래디언트 배경 */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${selectedGradient} -z-10`}
        style={{ minHeight: '100vh' }}
      />

      {/* Header */}
      <Header />

      {/* TravleConcepts */}
      <TravleConcepts onSelectConcept={handleConceptSelect} />

      {/* SearchBar */}
      <SearchBar onSearchComplete={handleSearchComplete} />

      {/* 기존 Footer와 CustomerFooter 조건부 렌더링 */}
      {!selectedConcept || !searchData ? (
        <Footer />
      ) : (
        <>
          <RecommendList concept={selectedConcept} region={searchData.region} date={searchData.date} />
          {/* @ts-ignore */}
          <CustomerFooter concept={selectedConcept} />
        </>
      )}
    </div>
  );
};

export default TravleContents;
