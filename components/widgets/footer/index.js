import React from 'react';
import CopyRights from '../../sections/copyrights';
import FooterOne from '../../sections/footer-one';
import FooterThree from '../../sections/footer-three';
import FooterTwo from '../../sections/footer-two';

const Footer = () => {
  return (
    <footer className="bg-white px-0 lg:px-16">
      <FooterOne />
      <FooterThree />
      <CopyRights />
    </footer>
  );
};

export default Footer;
