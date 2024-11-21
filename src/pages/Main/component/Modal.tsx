// src/components/Modal.tsx
import React from 'react';
import styles from '.././styles/MainPage.module.css';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
