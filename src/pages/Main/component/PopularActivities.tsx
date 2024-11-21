// src/components/PopularActivities.tsx
import styles from '../styles/MainPage.module.css';
import popularList from "../../.././assets/main-challenge.svg"
const PopularActivities = () => {
  const activities = [
    { id: 1, title: '고구마 캐기', location: '경북 칠곡', price: '50,000원', rating: 4.8 },
    { id: 2, title: '꼬막 체험', location: '강남 동명', price: '12,000원', rating: 4.5 },
    { id: 3, title: '가을 농촌 체험', location: '경북 칠곡', price: '18,000원', rating: 5 },
    { id: 4, title: '차 만들기', location: '전남 보성', price: '20,000원', rating: 5 },
  ];

  return (
    <div className={styles.popularActivities}>
      <h2>인기 액티비티</h2>
      <div className={styles.activityList}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.card}>
            <div>
              📷
              src={popularList}
            </div>
            <div className={styles.details}>
              <h3>{`[${activity.location}] ${activity.title}`}</h3>
              <p>{activity.price}</p>
              <p>⭐ {activity.rating}</p>
              <button className={styles.heartButton}>❤️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularActivities;

// src/components/PopularActivities.tsx (react-query버전)
// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import styles from '../styles/MainPage.module.css';

// const fetchActivities = async () => {
//   const { data } = await axios.get('/api/activities'); // Replace with your API endpoint
//   return data;
// };

// const PopularActivities = () => {
//   const { data, isLoading, error } = useQuery(['activities'], fetchActivities);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading activities</div>;

//   return (
//     <div className={styles.popularActivities}>
//       <h2>인기 액티비티</h2>
//       <div className={styles.activityList}>
//         {data.map((activity) => (
//           <div key={activity.id} className={styles.card}>
//             <div className={styles.imagePlaceholder}>📷</div>
//             <div className={styles.details}>
//               <h3>{`[${activity.location}] ${activity.title}`}</h3>
//               <p>{activity.price}</p>
//               <p>⭐ {activity.rating}</p>
//               <button className={styles.heartButton}>❤️</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularActivities;
