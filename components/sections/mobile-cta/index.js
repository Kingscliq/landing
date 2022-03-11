import Image from 'next/image';
import React from 'react';
import { iphone } from '../../../assets/images';
import Button from '../../elements/button';
import { SmallHeading, Subheading, SmallText } from '../../elements/text';
const MobileCta = () => {
  return (
    <section className="w-full bg-primary grid lg:grid-cols-2 gap-12 items-center justify-items-center pt-11 px-11 lg:px-48 text-white bg-section ">
      <div className="flex flex-col lg:items-start lg:justify-start">
        <Subheading className="bg-no-repeat bg-left mb-4 text-center lg:text-left">
          Start accessing reliable data in Africa
        </Subheading>
        <SmallText className="text-center lg:text-left">
          Because reliable data is the foundation for every good decision and
          exceptional result, we stay committed to what we do.
        </SmallText>
        <Button
          label="Request a Demo"
          className="mt-11 w-44 self-center lg:self-start"
        />
      </div>
      <div className="mt-14">
        <Image src={iphone} alt="CrowdForce | Iphone" />
      </div>
    </section>
  );
};

export default MobileCta;
