import styles from '../../styles/Filter.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { CountryData } from '../../api';

type Props = {
  darkMode: boolean;
  data?: CountryData[];
};

export default function CountryCardWrapper({ darkMode, data }: Props) {
  return (
    <div className={styles.countryCardWrapper}>
      {data?.map((item, index) => (
        <Link
          href={{
            pathname: '/detail',
            query: { item: JSON.stringify(item) }
          }}
          as={'/detail?name=' + item?.name?.common}
          key={index}>
          <div
            className={darkMode ? `${styles.countryCard} ${styles.darkProps}` : styles.countryCard}>
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
    </div>
  );
}
