import React from 'react';
import { SmallHeading, Subheading, SmallText } from '../../elements/text';

const CtaOne = () => {
  return (
    <section className="w-full h-auto md:h-96 bg-primary flex justify-center items-center flex-col py-11 px-11 md:px-[28rem] text-white ">
      <Subheading className="text-center bg-heading bg-no-repeat bg-bottom mb-4">
        Africa’s largest reliable data sourcing network
      </Subheading>
      <SmallText className="text-center ">
        It is difficult to get reliable and verifiable data out of Africa so we
        built the mobile technology and a network of 100,000 field agents to
        solve this problem.
      </SmallText>
    </section>
  );
};

export default CtaOne;
