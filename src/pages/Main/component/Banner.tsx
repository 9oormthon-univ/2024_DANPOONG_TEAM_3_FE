// src/components/Banner.tsx
import SearchBar from './SearchBar';
import styles from '../styles/MainPage.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1>도심 속 지친 당신을 위한 제주도 한달 살기</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
