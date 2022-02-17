import { useEffect } from 'react';
import '../styles/index.css';
import NavBar from '../components/widgets/nav-bar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ delay: 500, duration: 1000, easing: 'ease' });
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
