import React, { useEffect, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Marker from '@/assets/Marker.svg';

type Activity = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  details: string;
};

const MapComponent: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  const mapRef = useRef<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && activities.length > 0) {
      // 지도를 리사이즈하고, 중심 위치를 설정합니다.
      mapRef.current.relayout();
      mapRef.current.setCenter(new window.kakao.maps.LatLng(activities[0].lat, activities[0].lng));
    }
  }, [activities]);

  return (
    <div className="relative">
      <Map
        className="rounded-lg"
        center={{ lat: activities.length > 0 ? activities[0].lat : 37.5665, lng: activities.length > 0 ? activities[0].lng : 126.9780 }}
        style={{ width: '100%', height: '339px' }}
        level={9}
        onCreate={(map) => {
          // onCreate 이벤트를 통해 지도 인스턴스를 mapRef에 저장합니다.
          mapRef.current = map;
        }}
      >
        {/* 액티비티 마커 표시 */}
        {activities.map((activity) => (
          <MapMarker
            key={activity.id}
            position={{ lat: activity.lat, lng: activity.lng }}
            image={{
              src: Marker,
              size: {
                width: 34,
                height: 39,
              },
              options: {
                offset: {
                  x: 17, // 중앙에 위치하게 하도록 x값을 이미지의 중간 지점으로 설정합니다.
                  y: 39, // y값은 이미지 높이만큼 설정하여 바닥에 위치하도록 합니다.
                },
              },
            }}
          />
        ))}
      </Map>
    </div>
  );
};

export default MapComponent;