import React from 'react';
import FooterMenu from '../../elements/footer-menu';
import { SmallText } from '../../elements/text';

const FooterThree = () => {
  return (
    <section className="container mt-20" data-aos="fade-up">
      <FooterMenu title="Locations">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
          <div className="mr-20 mb-6  md:mb-0">
            <h4 className="font-bold text-primary">North America</h4>
            <SmallText className="text-primary">
              814 Mission Street, <br /> 6th Floor.
            </SmallText>
          </div>
          <div>
            <h4 className="font-bold text-primary">Africa</h4>
            <SmallText className="text-primary">
              Plot 265, S.E Asebe street, <br />
              Mabushi, Abuja.
            </SmallText>
          </div>
        </div>
      </FooterMenu>
    </section>
  );
};

export default FooterThree;
