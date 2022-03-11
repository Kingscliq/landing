import React from 'react';
import FooterMenu from '../../elements/footer-menu';
import { SmallText } from '../../elements/text';

const FooterTwo = () => {
  return (
    <section className="grid grid-cols-5 items-start container mt-8 gap-24 lg:gap-12">
      <div className="col-span-1">
        <FooterMenu title="General Enquiries">
          <SmallText className="text-sm mb-3 text-primary">
            7687360803809
          </SmallText>

          <SmallText className="text-sm mb-3 text-primary">
            7687360803809
          </SmallText>

          <SmallText className="text-sm mb-3 text-primary">
            7687360803809
          </SmallText>
        </FooterMenu>
      </div>
      <div className="col-span-4 h-[2px] w-full bg-gray mt-5"></div>
    </section>
  );
};

export default FooterTwo;
