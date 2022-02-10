import '../styles/index.css';
import NavBar from '../components/widgets/nav-bar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
