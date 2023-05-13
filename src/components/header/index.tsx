import styles from '../../styles/NavBar.module.css';
import { useState } from 'react';

type Props = {
  darkMode: boolean;
  handleModeClick: () => void;
};

export default function NavBar({ darkMode, handleModeClick }: Props) {
  return (
    <div className={darkMode ? `${styles.wrapper} ${styles.dark}` : styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.appTitle}>Where in the world?</p>
        <div className={styles.modeWrapper} onClick={handleModeClick}>
          <p className={styles.modeText}>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export function useDarkMode(initialMode = false): [boolean, () => void] {
  const [darkMode, setDarkMode] = useState<boolean>(initialMode);

  const handleModeClick = () => {
    setDarkMode(!darkMode);
    console.log('clicked!');
  };

  return [darkMode, handleModeClick];
}
