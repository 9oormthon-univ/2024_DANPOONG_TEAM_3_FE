import React, { useEffect, useRef, useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import starIcon from "../../.././assets/start.svg";

type Activity = {
  id: number;
  lat: number;
  lng: number;
  name: string;
  details: string;
  price: string;
  image: string;
  rating: number;
  reviewCount: number;
};

const MapComponent: React.FC<{ activities: Activity[] }> = ({ activities }) => {
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  useEffect(() => {
    if (mapRef.current && activities.length > 0) {
      // 지도를 리사이즈하고, 중심 위치를 설정합니다.
      mapRef.current.relayout();
      mapRef.current.setCenter(new window.kakao.maps.LatLng(activities[0].lat, activities[0].lng));
    }
  }, [activities]);

  const handleMarkerClick = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="relative w-[1160px] h-[400px] mx-auto mt-6">
      {/* 지도 부분 */}
      <div className="w-full h-[339px] rounded-[20px] overflow-hidden shadow-lg">
        <Map
          className="rounded-[20px]"
          center={{
            lat: activities.length > 0 ? activities[0].lat : 37.5665,
            lng: activities.length > 0 ? activities[0].lng : 126.9780,
          }}
          style={{ width: '100%', height: '100%' }}
          level={9}
          onCreate={(map) => {
            // onCreate 이벤트를 통해 지도 인스턴스를 mapRef에 저장합니다.
            mapRef.current = map;
          }}
        >
          {/* 액티비티 마커 표시 */}
          {activities.map((activity) => (
            <CustomOverlayMap
              key={activity.id}
              position={{ lat: activity.lat, lng: activity.lng }}
              clickable={true}
            >
              <div
                onClick={() => handleMarkerClick(activity)}
                className={`w-[139px] h-[34px] flex items-center justify-center rounded-[20px] border text-sm font-bold cursor-pointer transition-all duration-300 ${
                  selectedActivity?.id === activity.id
                    ? 'bg-[#59C642] text-white border-transparent'
                    : 'bg-white text-[#59C642] border-[#59C642]'
                } hover:bg-[#f0ffed] hover:border-[#59C642] hover:text-[#222222]`}
              >
                {activity.price}
              </div>
            </CustomOverlayMap>
          ))}
        </Map>
      </div>

      {/* 선택된 액티비티 정보 표시 */}
      {selectedActivity && (
        <div
        className="absolute transform -translate-y-1/2 w-[275px] h-[230px] bg-white border border-gray-300 rounded-lg p-3 z-10 text-left"
        style={{
          top: '50%',
          left: `calc(${selectedActivity.lng}px + 130px)`, // 각 핀의 좌표 기준으로 이동
          boxShadow: '0 4px 10px rgba(89, 198, 66, 0.4)', // 그림자 색상과 투명도를 조정
        }}
      >
          <img
            src={selectedActivity.image}
            alt={selectedActivity.name}
            className="w-full h-[120px] object-cover rounded-lg mb-3"
          />
          <h3 className="text-base font-bold text-gray-900">{selectedActivity.name}</h3>

          {/* 별점, 리뷰 및 가격 */}
          <div className="flex items-center mb-2 mt-1">
            <img src={starIcon} alt="star-icon" className="w-[18px] h-[18px] mr-1" />
            <span className="text-sm text-gray-700 font-semibold">{selectedActivity.rating}</span>
            <span className="text-sm text-gray-500 ml-2">리뷰 {selectedActivity.reviewCount}개</span>
            <span className="text-lg font-bold text-[#59C642] ml-auto">{selectedActivity.price}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
