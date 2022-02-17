import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  bei,
  dufil,
  healthStrategy,
  minOfHealth,
  nbs,
  traderMoni,
} from '../../../assets/icons';
import Button from '../../elements/button';
import {
  Heading,
  SmallHeading,
  SmallText,
  Subheading,
} from '../../elements/text';

const ClientsSection = () => {
  return (
    <section className="bg-white px-0 md:px-16 ">
      <div className="container h-auto md:h-96 flex flex-col items-start justify-center">
        <Subheading className="text-primary md:w-[510px] mb-3.5 mt-24">
          Clients
        </Subheading>
        <SmallText>
          Read more about our CrowdForce Series, keeping you up to date with our
          Projects
        </SmallText>
        <div className="grid gap-9 grid-cols-2 md:flex md:items-center md:justify-between w-full mt-11">
          <Image src={minOfHealth} />
          <Image src={traderMoni} />
          <Image src={nbs} />
          <Image src={bei} />
          <Image src={dufil} />
          <Image src={healthStrategy} />
        </div>
        <Link href="https://medium.com/crowdforce-series">
          <a target="_blank">
            <Button label="Read Crowdforce Series" className="mt-3" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ClientsSection;
