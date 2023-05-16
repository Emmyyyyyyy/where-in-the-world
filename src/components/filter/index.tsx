import styles from '../../styles/Filter.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  darkMode: boolean;
};

export default function Filter({ darkMode }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [data, setData] = useState();
  const handleFilterButtonClick = () => {
    setOpen(!open);
    // if (open) console.log('open');
    // else console.log('close!');
  };
  const handleRegionClick = (region: string) => {
    setSelectedRegion(region);
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://restcountries.com/v3.1/all`);
      const json = await data.json();
      setData(json);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(data);

  return (
    <div className={darkMode ? `${styles.wrapper} ${styles.dark}` : styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.filterAreaWrapper}>
          <input
            className={darkMode ? `${styles.searchBar} ${styles.darkProps}` : styles.searchBar}
            placeholder="Search for a country..."
          />
          <div className={styles.buttonWrapper}>
            <button
              className={darkMode ? `${styles.button} ${styles.darkProps}` : styles.button}
              onClick={handleFilterButtonClick}>
              {selectedRegion || 'Filter by Region'}
            </button>
            {open && (
              <div
                className={darkMode ? `${styles.dropDown} ${styles.darkProps}` : styles.dropDown}>
                <ul>
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
        <div className={styles.countryCardWrapper}>
          {data?.map((item, index) => (
            <Link href="/detail" key={index}>
              <div
                className={
                  darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard
                }>
                <Image
                  src={item?.flags?.svg}
                  alt={item?.flags?.alt}
                  className={styles.coverImage}
                  width={1}
                  height={1}
                />
                <div className={styles.textArea}>
                  <p className={styles.country}>{item?.name?.common}</p>
                  <div className={styles.infoWrapper}>
                    <div className={styles.info}>
                      <p className={styles.type}>Population:</p>
                      <p className={styles.value}>{item?.population.toLocaleString('en-US')}</p>
                    </div>
                    <div className={styles.info}>
                      <p className={styles.type}>Rigion:</p>
                      <p className={styles.value}>{item?.region}</p>
                    </div>
                    <div className={styles.info}>
                      <p className={styles.type}>Capital:</p>
                      <p className={styles.value}>{item?.capital}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
            <Image src="" alt="" className={styles.coverImage} />
            <div className={styles.textArea}>
              <p className={styles.country}>Germany</p>
              <div className={styles.infoWrapper}>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Population: <p className={styles.value}>81,770,900</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Rigion: <p className={styles.value}>Europe</p>
                  </p>
                </div>
                <div className={styles.info}>
                  <p className={styles.type}>
                    Capital: <p className={styles.value}>Berlin</p>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
