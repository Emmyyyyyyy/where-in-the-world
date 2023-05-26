import styles from '../../styles/Filter.module.css';
import React from 'react';

type Props = {
  darkMode: boolean;
  open: boolean;
  selectedRegion: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  handleFilterButtonClick: () => void;
  handleRegionClick: (region: string) => void;
  handleChange: (event: any) => void;
};

export default function Filter({
  darkMode,
  open,
  selectedRegion,
  setOpen,
  setSelectedRegion,
  handleFilterButtonClick,
  handleRegionClick,
  handleChange
}: Props) {

  return (
    <div className={styles.filterAreaWrapper}>
      <input
        className={darkMode ? `${styles.searchBar} ${styles.darkProps}` : styles.searchBar}
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
      />
      <div className={styles.buttonWrapper}>
        <button
          className={darkMode ? `${styles.button} ${styles.darkProps}` : styles.button}
          onClick={handleFilterButtonClick}>
          {selectedRegion || 'Filter by Region'}
        </button>
        {open && (
          <div className={darkMode ? `${styles.dropDown} ${styles.darkProps}` : styles.dropDown}>
            <ul>
              <li className={styles.region} onClick={() => handleRegionClick('All')}>
                All
              </li>
              <li className={styles.region} onClick={() => handleRegionClick('Africa')}>
                Africa
              </li>
              <li className={styles.region} onClick={() => handleRegionClick('America')}>
                America
              </li>
              <li className={styles.region} onClick={() => handleRegionClick('Asia')}>
                Asia
              </li>
              <li className={styles.region} onClick={() => handleRegionClick('Europe')}>
                Europe
              </li>
              <li className={styles.region} onClick={() => handleRegionClick('Oceania')}>
                Oceania
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
