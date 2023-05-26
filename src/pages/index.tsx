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
  const [input, setInput] = useState('');
  const [filterdCountry, setFilterdCountry] = useState<CountryData[]>();

  useEffect(() => {
    fetchAllData(setData);
  }, []);

  useEffect(() => {
    setFilterdCountry(data);
  }, data);

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

  const handleChange = (event: any) => {
    event.preventDefault();
    const getInput = event.target.value;
    setInput(getInput);
    const filtered = data?.filter((country) =>
      country.name.common.toLowerCase().includes(getInput.toLowerCase())
    );
    setFilterdCountry(filtered);
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
          handleChange={handleChange}
        />
        <CountryCardWrapper darkMode={darkMode} filterdCountry={filterdCountry} data={data} />
      </div>
    </div>
  );
}
