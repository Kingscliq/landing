import Head from 'next/head';
import ClientsSection from '../components/sections/clients';
import Contact from '../components/sections/contact';
import CounterSection from '../components/sections/counter';
import CtaOne from '../components/sections/cta-one';
import Features from '../components/sections/features';

import Hero from '../components/sections/hero';
import MobileCta from '../components/sections/mobile-cta';
import Testimonials from '../components/sections/testimonials';
import Footer from '../components/widgets/footer';
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
      <Features />
      <MobileCta />
      <ClientsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
