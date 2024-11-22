// import React, { useEffect } from 'react';

// const Map: React.FC<{ activities: any[] }> = ({ activities }) => {
//   useEffect(() => {
//     // 카카오 맵을 불러오는 스크립트 및 맵 생성 로직
//     const script = document.createElement('script');
//     script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false';
//     script.async = true;

//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const container = document.getElementById('map');
//         const options = {
//           center: new window.kakao.maps.LatLng(37.5665, 126.9780),
//           level: 3,
//         };
//         const map = new window.kakao.maps.Map(container, options);

//         // 액티비티 핀 생성
//         activities.forEach((activity) => {
//           const position = new window.kakao.maps.LatLng(activity.lat, activity.lng);
//           const marker = new window.kakao.maps.Marker({
//             position,
//             map,
//           });

//           // 핀 클릭 이벤트 추가
//           window.kakao.maps.event.addListener(marker, 'click', () => {
//             // 모달을 표시하는 로직
//           });
//         });
//       });
//     };

//     document.head.appendChild(script);
//   }, [activities]);

//   return (
//     <div id="map" className="w-[1160px] h-[339px] rounded-[20px]"></div>
//   );
// };

// export default Map;
