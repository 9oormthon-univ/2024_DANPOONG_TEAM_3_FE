// src/components/Recommendation.tsx
import styles from '../styles/MainPage.module.css';

const Recommendation = () => {
  const concepts = [
    { id: 1, label: '산으로', image: '/mountain-icon.svg' },
    { id: 2, label: '바다로', image: '/beach-icon.svg' },
    { id: 3, label: '농촌으로', image: '/farm-icon.svg' },
  ];

  return (
    <div className={styles.recommendation}>
      <h2>도시를 떠나 새로운 경험을 만끽해보세요!</h2>
      <div className={styles.buttons}>
        {concepts.map((concept) => (
          <button key={concept.id} className={styles.button}>
            <img src={concept.image} alt={concept.label} />
            {concept.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
