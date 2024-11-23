import React, { useState, useEffect } from 'react';
import Header from '.././Main/component/Header';
import SearchBar from "./component/SearchBar";
import SearchTags from './component/SearchTags';
import MapComponent from './component/MapComponent';
import SearchList from './component/SearchList';
import activity1 from "../.././assets/activity1.svg";
import activity2 from "../.././assets/activity2.svg";
import activity3 from "../.././assets/activity3.svg";
import activity4 from "../.././assets/activity4.svg";
import activity5 from "../.././assets/activity5.svg";
import activity6 from "../.././assets/activity6.svg";

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
  const [searchParams, setSearchParams] = useState<{ region: string; date: string; adultCount: number; childCount: number }>({
    region: '강원도, 강릉',
    date: '11월 29일 - 12월 30일',
    adultCount: 1,
    childCount: 0,
  });

  const dummyActivities: Activity[] = [
    {
      id: 1,
      image: activity1,
      title: '[강원 춘천] 강촌레일파크',
      price: '33,000원',
      rating: 4.6,
      reviewCount: 2000,
      reviewPreview: '가을에 아름다운 풍경을 자전거로 탐험하는 독특한 경험입니다!',
      lat: 37.8597, // 춘천시 근처 조정된 좌표
      lng: 127.7401, // 강원도 춘천시
      name: '강촌레일파크',
      details: '자연 속에서 힐링할 수 있는 농촌 체험입니다.'
    },
    {
      id: 2,
      image: activity2,
      title: '[강원도] KTX 인더숲 일일 투어',
      price: '289,000원',
      rating: 5,
      reviewCount: 5,
      reviewPreview: '정말 멋진 경험이었습니다.',
      lat: 37.7518, // 원주시 근처
      lng: 127.9865, // 강원도 원주시
      name: 'KTX 인더숲',
      details: '신선한 바다를 경험할 수 있는 어촌 체험입니다.'
    },
    {
      id: 3,
      image: activity3,
      title: '[강원 평창] 대관령 양떼목장',
      price: '8,000원',
      rating: 4.6,
      reviewCount: 20,
      reviewPreview: '경치가 좋은데다 날씨도 춥지 않고 딱 좋았습니다.',
      lat: 37.6317, // 평창군 근처
      lng: 128.6837, // 강원도 평창군
      name: '대관령 양떼목장',
      details: '양들과 함께 즐거운 시간을 보낼 수 있는 목장입니다.'
    },
    {
      id: 4,
      image: activity4,
      title: '[강원 강릉] 아르떼 뮤지엄',
      price: '100,000원',
      rating: 4.7,
      reviewCount: 387,
      reviewPreview: '강릉까지 가서 뮤지엄을 봐야나 했는데 무조건 봐야해요!!!',
      lat: 37.7555, // 강릉시 근처
      lng: 128.8965, // 강원도 강릉시
      name: '아르떼 뮤지엄',
      details: '강릉의 아름다운 미술 작품들을 감상할 수 있는 뮤지엄입니다.'
    },
    {
      id: 5,
      image: activity5,
      title: '[강원 홍천] 알파카 월드',
      price: '18,000원',
      rating: 4.8,
      reviewCount: 248,
      reviewPreview: '알파카들 귀엽습니다. 먹이 자판기도 잘 돼있어서 먹이주고 편합니다.',
      lat: 37.7076, // 홍천군 근처
      lng: 127.8887, // 강원도 홍천군
      name: '알파카 월드',
      details: '알파카들과 함께 재미있는 시간을 보낼 수 있는 장소입니다.'
    },
    {
      id: 6,
      image: activity6,
      title: '[강원 양양] 물치해변 서핑 강습 & 대여',
      price: '60,000원',
      rating: 4.9,
      reviewCount: 41,
      reviewPreview: '강습 너무 잘 알려주시고 친절하게 잘 대해주셔서 친구랑 완전 감동하고 갑니다…ㅠ',
      lat: 37.9943, // 양양군 근처
      lng: 128.6193, // 강원도 양양군
      name: '물치해변 서핑',
      details: '서핑을 즐길 수 있는 양양의 아름다운 해변입니다.'
    }
  ];

  useEffect(() => {
    if (searchParams.region) {
      setActivities(dummyActivities.filter(activity => activity.title.includes(searchParams.region)));
    } else {
      setActivities(dummyActivities);
    }
  }, [searchParams]);
  
  useEffect(() => {
    setActivities(dummyActivities);
  }, []);
  
  const handleSearch = (region: string, date: string, adultCount: number, childCount: number) => {
    // 검색 조건이 설정되었을 때, activities를 필터링하여 설정하는 로직
    setSearchParams({ region, date, adultCount, childCount });
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    if (tag === '인기순') {
      const sortedActivities = [...activities].sort((a, b) => b.rating - a.rating);
      setActivities(sortedActivities);
    }
  };

  return (
    <div>
      <div className="header-container" style={{ position: 'relative', zIndex: 20 }}>
        <Header />
      </div>
      <div style={{ marginBottom: '120px' }} />
      <div className="search-bar-container" style={{ position: 'relative', zIndex: 10 }}>
        <SearchBar onSearchComplete={handleSearch} />
      </div>
      <SearchTags onTagSelect={handleTagSelect} />
      <MapComponent activities={activities} />
      <SearchList activities={activities} />
    </div>
  );
};

export default ActivityPage;
