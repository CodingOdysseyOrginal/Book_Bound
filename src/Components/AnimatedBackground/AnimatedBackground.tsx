import React from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className={styles.background}>
      {[...Array(50)].map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
