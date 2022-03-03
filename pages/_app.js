import { useEffect } from 'react';
import '../styles/index.css';
import NavBar from '../components/widgets/nav-bar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ delay: 500, duration: 1000, easing: 'ease', once: true });
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
