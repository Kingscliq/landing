import Image from 'next/image';
import React from 'react';
import {
  bei,
  dufil,
  healthStrategy,
  minOfHealth,
  nbs,
  traderMoni,
} from '../../../assets/icons';
import {
  Heading,
  SmallHeading,
  SmallText,
  Subheading,
} from '../../elements/text';

const ClientsSection = () => {
  return (
    <section className="bg-white ">
      <div className="container h-auto md:h-96 flex flex-col items-start justify-center">
        <Subheading className="text-primary md:w-[510px] mb-3.5 mt-24">
          Advancing information for our amazing clients
        </Subheading>
        <SmallText>
          CrowdForce Mobile Forms Faucibus libero consectetur nisi, aenean magna
          scelerisque. Nisl amet nibh hendrerit commodo amet ut. Sed libero.
        </SmallText>
        <div className="grid gap-9 grid-cols-2 md:flex md:items-center md:justify-between w-full mt-11">
          <Image src={minOfHealth} />
          <Image src={traderMoni} />
          <Image src={nbs} />
          <Image src={bei} />
          <Image src={dufil} />
          <Image src={healthStrategy} />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
