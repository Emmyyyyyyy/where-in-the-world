import Filter from '../components/homeBody/filter';
import CountryCardWrapper from '../components/homeBody/countryCardWrapper';
import { useState, useEffect } from 'react';
import { fetchAllData, CountryData, fetchSelectedRegionData } from '../api';
import styles from '../styles/Filter.module.css';

type Props = {
  darkMode: boolean;
};

export default function Home({ darkMode }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [data, setData] = useState<CountryData[]>();

  useEffect(() => {
    fetchAllData(setData);
  }, []);

  const handleFilterButtonClick = () => {
    setOpen(!open);
  };

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    if (region === 'All') {
      fetchAllData(setData);
    } else {
      fetchSelectedRegionData(setData, region);
    }
    setOpen(false);
  };

  return (
    <div className={darkMode ? `${styles.wrapper} ${styles.dark}` : styles.wrapper}>
      <div className={styles.container}>
        <Filter
          darkMode={darkMode}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          setOpen={setOpen}
          open={open}
          handleFilterButtonClick={handleFilterButtonClick}
          handleRegionClick={handleRegionClick}
        />
        <CountryCardWrapper darkMode={darkMode} data={data} />
      </div>
    </div>
  );
}
