import React, { useState } from 'react';
import Header from '.././Main/component/Header';
// import SearchBar from './component/SearchBar';
import SearchBar from ".././Main/component/SearchBar";
import SearchTags from './component/SearchTags';
import MapComponent from './component/Map'; // 수정된 MapComponent 이름 사용
import SearchList from './component/SearchList';
import Footer from ".././Main/component/Footer";

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
  name: string; // 추가: 활동 이름
  details: string; // 추가: 활동 세부 정보
};

const ActivityPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<{ region: string; date: string; adultCount: number; childCount: number } | null>(null);

  const handleSearch = (region: string, date: string, adultCount: number, childCount: number) => {
    // 검색 조건이 설정되었을 때, activities를 필터링하여 설정하는 로직
    setSearchParams({ region, date, adultCount, childCount });

    // 기본적으로는 모든 활동을 보여주며, 여기서 검색 조건을 기반으로 활동 목록을 필터링합니다.
    const filteredActivities = dummyActivities.filter(activity => 
      activity.title.includes(region)
    );

    setActivities(filteredActivities);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    // 태그에 맞는 정렬 로직
    if (tag === '인기순') {
      const sortedActivities = [...activities].sort((a, b) => b.rating - a.rating);
      setActivities(sortedActivities);
    }
  };

  // 더미 활동 데이터 예시
  const dummyActivities: Activity[] = [
    { id: 1, image: 'image1.jpg', title: '농촌 체험', price: '₩50,000', rating: 4.5, reviewCount: 20, reviewPreview: '매우 만족!', lat: 37.5665, lng: 126.9780, name: '농촌 체험', details: '자연 속에서 힐링할 수 있는 농촌 체험입니다.' },
    { id: 2, image: 'image2.jpg', title: '어촌 체험', price: '₩60,000', rating: 4.0, reviewCount: 15, reviewPreview: '좋아요!', lat: 37.5645, lng: 126.9800, name: '어촌 체험', details: '신선한 바다를 경험할 수 있는 어촌 체험입니다.' },
    // 더 많은 더미 데이터 추가 가능
  ];

  return (
    <div>
      <Header />
      {/* <SearchBar onSearchComplete={handleSearch} /> */}
      <SearchBar />  // SearchBar로 수정
      <SearchTags onTagSelect={handleTagSelect} />
      
      {activities.length > 0 ? (
        <>
          <MapComponent activities={activities} /> {/* MapComponent로 수정 */}
          <SearchList activities={activities} />
        </>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default ActivityPage;
