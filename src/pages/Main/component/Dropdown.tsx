// src/components/Dropdown.tsx
import styles from '../styles/MainPage.module.css';

type DropdownProps = {
  placeholder: string;
  value: string;
  onClick: () => void;
};

const Dropdown = ({ placeholder, value, onClick }: DropdownProps) => {
  return (
    <div className={styles.dropdown} onClick={onClick}>
      {value || placeholder}
    </div>
  );
};

export default Dropdown;
