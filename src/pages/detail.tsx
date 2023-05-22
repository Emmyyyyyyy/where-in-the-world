import styles from '../styles/Detail.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Key, useEffect, useState } from 'react';

type Props = {
  darkMode: boolean;
};

export default function Detail({ darkMode }: Props) {
  const router = useRouter();
  const { item } = router.query;

  const itemData = item ? JSON.parse(Array.isArray(item) ? item[0] : item) : null;

  console.log(itemData);
  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonArea}>
        <button
          className={darkMode ? `${styles.backButton} ${styles.darkProps}` : styles.backButton}
          onClick={handleBackButtonClick}>
          Back
        </button>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.flagWrapper}>
          <Image
            src={itemData?.flags?.svg}
            alt={itemData?.flags?.alt}
            className={styles.coverImage}
            width={1}
            height={1}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.country}></p>
          <div className={styles.devideInfo}>
            <div className={styles.leftContainer}>
              <div>
                <p className={styles.type}>Native Name: </p>
                <p className={styles.value}>{itemData?.name?.common}</p>
              </div>
              <div>
                <p className={styles.type}>Population: </p>
                <p className={styles.value}>{itemData?.population.toLocaleString('en-US')}</p>
              </div>
              <div>
                <p className={styles.type}>Region: </p>
                <p className={styles.value}>{itemData?.region}</p>
              </div>
              <div>
                <p className={styles.type}>Sub Region: </p>
                <p className={styles.value}>{itemData?.subregion}</p>
              </div>
              <div>
                <p className={styles.type}>Capital: </p>
                <p className={styles.value}>{itemData?.capital}</p>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div>
                <p className={styles.type}>Top Level Domain: </p>
                <p className={styles.value}>
                  {itemData?.tld?.map((tld: string, index: Key | null | undefined) => (
                    <span key={index}>{tld} </span>
                  ))}
                </p>
              </div>
              <div>
                <p className={styles.type}>Currencies: </p>
                <p className={styles.value}>
                  {Object.keys(itemData?.currencies || {}).map((currencyCode, index) => (
                    <span key={index}>{itemData.currencies[currencyCode].name}</span>
                  ))}
                </p>
              </div>
              <div>
                <p className={styles.type}>Languages: </p>
                <p className={styles.value}>
                  {Object.keys(itemData?.languages || {}).map(
                    (languageCode, index, languageCodes) => (
                      <span key={index}>
                        {itemData?.languages[languageCode]}
                        {index !== languageCodes.length - 1 && ', '}
                      </span>
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.borderCountry}>
            <p className={styles.type} style={{ lineHeight: 'normal' }}>
              Border Countries:{' '}
            </p>
            <div className={styles.borderCountryList}>
              {itemData?.borders?.map((country: string, index: Key | null | undefined) => (
                <p
                  className={
                    darkMode
                      ? `${styles.borderCountryValue} ${styles.darkProps}`
                      : styles.borderCountryValue
                  }
                  key={index}>
                  {country}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
