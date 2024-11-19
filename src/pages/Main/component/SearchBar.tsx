// src/components/SearchBar.tsx
import { useState } from 'react';
import Dropdown from './Dropdown';
import Modal from './Modal';
import styles from '../styles/MainPage.module.css';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [peopleModalOpen, setPeopleModalOpen] = useState(false);

  return (
    <div className={styles.searchBar}>
      <Dropdown
        placeholder="여행지역"
        value={destination}
        onClick={() => console.log('Show recent searches!')}
      />
      <button
        className={styles.dateButton}
        onClick={() => setDateModalOpen(!dateModalOpen)}
      >
        일정
      </button>
      {dateModalOpen && <Modal>날짜 선택 달력</Modal>}
      <button
        className={styles.peopleButton}
        onClick={() => setPeopleModalOpen(!peopleModalOpen)}
      >
        인원
      </button>
      {peopleModalOpen && (
        <Modal>
          <div>
            성인: <button>-</button> 1 <button>+</button>
          </div>
          <div>
            어린이: <button>-</button> 0 <button>+</button>
          </div>
        </Modal>
      )}
      <button className={styles.searchButton}>🔍</button>
    </div>
  );
};

export default SearchBar;

// src/components/SearchBar.tsx (react-query버전)
// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import Modal from './Modal';
// import styles from './SearchBar.module.css';

// const fetchDestinations = async () => {
//   const { data } = await axios.get('/api/destinations'); // Replace with your API endpoint
//   return data;
// };

// const SearchBar = () => {
//   const [destination, setDestination] = useState('');
//   const [dateModalOpen, setDateModalOpen] = useState(false);
//   const [peopleModalOpen, setPeopleModalOpen] = useState(false);
//   const { data, isLoading, error } = useQuery(['destinations'], fetchDestinations);

//   return (
//     <div className={styles.searchBar}>
//       <input
//         type="text"
//         placeholder="여행지역"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//       />
//       {data && (
//         <div className={styles.dropdown}>
//           {data.map((item) => (
//             <div key={item.id} onClick={() => setDestination(item.name)}>
//               {item.name}
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         className={styles.dateButton}
//         onClick={() => setDateModalOpen(!dateModalOpen)}
//       >
//         일정
//       </button>
//       {dateModalOpen && <Modal>날짜 선택 달력</Modal>}
//       <button
//         className={styles.peopleButton}
//         onClick={() => setPeopleModalOpen(!peopleModalOpen)}
//       >
//         인원
//       </button>
//       {peopleModalOpen && (
//         <Modal>
//           <div>
//             성인: <button>-</button> 1 <button>+</button>
//           </div>
//           <div>
//             어린이: <button>-</button> 0 <button>+</button>
//           </div>
//         </Modal>
//       )}
//       <button className={styles.searchButton}>🔍</button>
//     </div>
//   );
// };

// export default SearchBar;
