import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

type Activity = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  details: string;
};

const MapComponent: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="relative">
      {/* 지도 컴포넌트 */}
      <Map
        className="rounded-lg"
        center={{ lat: 37.5665, lng: 126.9780 }} // 초기 중심 좌표 설정
        style={{ width: '1160px', height: '339px' }} // 지도 크기 설정
        level={3} // 확대 레벨 설정
      >
        {/* 액티비티 마커 표시 */}
        {activities.map((activity) => (
          <MapMarker
            key={activity.id}
            position={{ lat: activity.lat, lng: activity.lng }}
            onClick={() => setSelectedActivity(activity)} // 마커 클릭 시 액티비티 선택
          />
        ))}
      </Map>

      {/* 선택된 액티비티 정보 모달 */}
      {selectedActivity && (
        <div className="absolute top-0 left-0 bg-white p-4 rounded-lg shadow-lg z-50">
          <h2 className="text-lg font-bold">{selectedActivity.name}</h2>
          <p>상세 정보: {selectedActivity.details}</p>
          <button onClick={() => setSelectedActivity(null)} className="mt-2 text-blue-500">
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
