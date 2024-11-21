// src/components/Challenge.tsx
import styles from '../styles/MainPage.module.css';
import challengeImg from "../../.././assets/main-challenge.svg";
const Challenge = () => {
  return (
    <div className={styles.challenge}>
      <img
        src={challengeImg}
        alt="Today's Challenge"
        className={styles.challengeImage}
      />
      <h2 className={styles.title}>오늘의 챌린지</h2>
      <p className={styles.date}>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Challenge;
