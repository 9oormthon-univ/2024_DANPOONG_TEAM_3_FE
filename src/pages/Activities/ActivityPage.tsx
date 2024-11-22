import Header from ".././Main/component/Header";
import SearchBar from ".././Main/component/SearchBar";
import React, { useState } from 'react';
import SearchTags from './component/SearchTags';
// import Map from './component/Map';
import SearchList from './component/SearchList';

type Activity = {
  id: number;
  image: string;
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  reviewPreview: string;
  lat: number;
  lng: number;
};

const ActivityPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      title: '[강원 춘천] 강촌레일파크',
      price: '33,000원',
      rating: 4.6,
      reviewCount: 2000,
      reviewPreview: '강촌의 아름다운 경치를 즐기며...',
      lat: 37.8,
      lng: 127.5,
    },
    // 더미 데이터 추가
  ]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    // 태그에 따른 정렬 로직 추가
  };

  return (
    <div>
      <Header />
      { /* 검색 완료 핸들러 */ }
      {/* <SearchBar onSearchComplete={() => } /> */}
      <SearchTags onTagSelect={handleTagSelect} />
      {/* 카카오맵 */}
      {/* <Map activities={activities} /> */}
      <SearchList activities={activities} />
    </div>
  );
};

export default ActivityPage;
