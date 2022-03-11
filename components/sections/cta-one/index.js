import React from 'react';
import { SmallHeading, Subheading, SmallText } from '../../elements/text';

const CtaOne = () => {
  return (
    <section className="w-full h-auto bg-primary flex justify-center items-center flex-col py-11 px-11 lg:px-[28rem] text-white bg-world ">
      <div className="lg:w-[90%] w-auto">
        <Subheading className="text-center mb-12">
          <span className="bg-heading bg-no-repeat bg-bottom">Africa’s </span>
          largest reliable data sourcing network
        </Subheading>
        <SmallText className="text-center ">
          Due to the difficulty in getting reliable data out of Africa, we built
          a mobile technology and a network of over 50,000 field agents to solve
          this problem.
        </SmallText>
      </div>
    </section>
  );
};

export default CtaOne;
