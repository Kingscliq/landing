import Image from 'next/image';
import React from 'react';
import { badge, testim } from '../../../../assets/images';
import { SmallText } from '../../text';

const TestimonialCard = ({
  description,
  img,
  logo,
  name,
  title,
  logoHeight,
  logoWidth,
  logoLayout,
}) => {
  return (
    <div className="p-4 shadow" data-aos="fade-up">
      <div>
        <Image
          src={logo || badge}
          height={logoHeight}
          width={logoWidth}
          layout={logoLayout}
        />
      </div>
      <div className="mt-2 w-full border-t border-gray h-[1px]"></div>
      <div className="mt-3.5">
        <SmallText>
          {description ||
            'Reliable data is essential to sustainable economic development in Africa. MobileForms plays a transformative role in this space.'}
        </SmallText>
      </div>
      <div className="mt-6 grid grid-cols-3 grid-rows-2 grid-flow-col items-center justify-start">
        <div className="col-span-1 row-span-2">
          <Image height={50} width={50} src={img || testim} />
        </div>
        <div className="col-span-2 row-span-1 ml-[-1rem] md:ml-[-3rem]">
          <h4 className="text-base sm:text-base text-primary font-bold">
            {name || ' Francis Ohanyido'}
          </h4>
        </div>
        <div className="col-span-2 row-span-1 ml-[-1rem]  md:ml-[-3rem]">
          <SmallText className="text-darkgray text-xs">
            {title || 'Senior Fellow'}
          </SmallText>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
