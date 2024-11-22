import React, { useState } from 'react';
import Header from '.././Main/component/Header';
import TravleConcepts from './component/TravleConcepts';
import SearchBar from './component/SearchBar';
import RecommendList from './component/RecommendList';
import CustomerFooter from './component/CustomFooter';
// import { ConceptType } from '../.././types/types';

const TravleContents: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [searchData, setSearchData] = useState<{ region: string; date: string } | null>(null);

  const handleConceptSelect = (concept: string) => {
    setSelectedConcept(concept);
  };

  const handleSearchComplete = (region: string, date: string) => {
    setSearchData({ region, date });
  };

  return (
    <div>
      <Header />
      <TravleConcepts onSelectConcept={handleConceptSelect} />
      <SearchBar onSearchComplete={handleSearchComplete} />
      {selectedConcept && searchData && (
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
