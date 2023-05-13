import '../styles/global.css';
import NavBar from '../components/header/index.tsx';
import { useDarkMode } from '../components/header/index.tsx';

export default function App({ Component, pageProps }) {
  const [darkMode, handleModeClick] = useDarkMode(false);
  return (
    <>
      <NavBar darkMode={darkMode} handleModeClick={handleModeClick} />
      <Component {...pageProps} darkMode={darkMode} />
    </>
  );
}
