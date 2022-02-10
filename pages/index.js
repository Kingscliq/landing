import Head from 'next/head';
import CounterSection from '../components/sections/counter';
import CtaOne from '../components/sections/cta-one';

import Hero from '../components/sections/hero';
import NavBar from '../components/widgets/nav-bar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobile Forms</title>
        <meta name="description" content="New Mobileforms Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CounterSection />
      <CtaOne />
    </div>
  );
}
