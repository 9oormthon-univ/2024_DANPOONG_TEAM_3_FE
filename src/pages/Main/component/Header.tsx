// src/components/Header.tsx
import { Link } from 'react-router-dom';
import styles from '../styles/MainPage.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Out of City</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/activity" className={styles.link}>
          액티비티
        </Link>
        <Link to="/challenge" className={styles.link}>
          챌린지 기록
        </Link>
        <Link to="/travel" className={styles.link}>
          여행 콘텐츠
        </Link>
      </nav>
      <div className={styles.icons}>
        <button aria-label="Cart" className={styles.icon}>
          🛒
        </button>
        <button aria-label="MyPage" className={styles.icon}>
          👤
        </button>
      </div>
    </header>
  );
};

export default Header;
