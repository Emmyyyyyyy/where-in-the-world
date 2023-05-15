import '../styles/global.css';
import NavBar from '../components/header/index.tsx';
import { useDarkMode } from '../components/header/index.tsx';

export default function App({ Component, pageProps }) {
  const [darkMode, handleModeClick] = useDarkMode(false);
  return (
    <>
      <NavBar darkMode={darkMode} handleModeClick={handleModeClick} />
      <div className={darkMode ? `wrapper dark` : 'wrapper'}>
        <Component {...pageProps} darkMode={darkMode} />
      </div>
    </>
  );
}
