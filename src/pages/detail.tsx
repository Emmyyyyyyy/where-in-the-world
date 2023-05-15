import styles from '../styles/Detail.module.css';
import { useRouter } from 'next/router';

type Props = {
  darkMode: boolean;
};

export default function Detail({ darkMode }: Props) {
  const router = useRouter();

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
        <div className={styles.flagWrapper}></div>
        <div className={styles.info}>
          <p className={styles.country}>Belgium</p>
          <div className={styles.devideInfo}>
            <div className={styles.leftContainer}>
              <div>
                <p className={styles.type}>Native Name: </p>
                <p className={styles.value}>Belgiè</p>
              </div>
              <div>
                <p className={styles.type}>Population: </p>
                <p className={styles.value}>11,319,511</p>
              </div>
              <div>
                <p className={styles.type}>Region: </p>
                <p className={styles.value}>Europe</p>
              </div>
              <div>
                <p className={styles.type}>Sub Region: </p>
                <p className={styles.value}>Western Europe</p>
              </div>
              <div>
                <p className={styles.type}>Capital: </p>
                <p className={styles.value}>Brussels</p>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div>
                <p className={styles.type}>Top Level Domain: </p>
                <p className={styles.value}>.be</p>
              </div>
              <div>
                <p className={styles.type}>Currencies: </p>
                <p className={styles.value}>Euro</p>
              </div>
              <div>
                <p className={styles.type}>Languages: </p>
                <p className={styles.value}>Dutch, French German</p>
              </div>
            </div>
          </div>
          <div className={styles.borderCountry}>
            <p className={styles.type} style={{ lineHeight: 'normal' }}>
              Border Countries:{' '}
            </p>
            <div className={styles.borderCountryList}>
              <p
                className={
                  darkMode
                    ? `${styles.borderCountryValue} ${styles.darkProps}`
                    : styles.borderCountryValue
                }>
                Dutch
              </p>
              <p
                className={
                  darkMode
                    ? `${styles.borderCountryValue} ${styles.darkProps}`
                    : styles.borderCountryValue
                }>
                French
              </p>
              <p
                className={
                  darkMode
                    ? `${styles.borderCountryValue} ${styles.darkProps}`
                    : styles.borderCountryValue
                }>
                German
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
