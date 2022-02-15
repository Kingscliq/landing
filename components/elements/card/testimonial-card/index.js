import Image from 'next/image';
import React from 'react';
import { badge, testim } from '../../../../assets/images';
import { SmallText, Subheading } from '../../text';

const TestimonialCard = () => {
  return (
    <div className="p-4 shadow">
      <div>
        <Image src={badge} />
      </div>

      <div className="mt-2 w-full border-t border-gray h-[1px]"></div>
      <div className="mt-3.5">
        <SmallText>
          Reliable data is essential to sustainable economic development in
          Africa. MobileForms plays a transformative role in this space.
        </SmallText>
      </div>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 grid-flow-col items-center">
        <div className="col-span-1 row-span-2">
          <Image src={testim} />
        </div>
        <div className="col-span-2 row-span-1">
          <h4 className="text-base sm:text-md text-primary font-bold">
            Francis Ohanyido
          </h4>
        </div>
        <div className="col-span-2 row-span-1">
          <SmallText>Senior Fellow</SmallText>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
