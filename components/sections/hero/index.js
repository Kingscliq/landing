import React from 'react';
import Button from '../../../components/elements/button';
import {
  Heading,
  SmallHeading,
  SmallText,
  Subheading,
} from '../../../components/elements/text';

import ReactPlayer from 'react-player';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-skyblue h-auto py-4 lg:py-36 px-0 lg:px-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div data-aos="fade-down">
              <SmallHeading className="text-center lg:text-left">
                Mobile Forms
              </SmallHeading>
            </div>
            <div data-aos="zoom-in-right">
              <Heading className="text-primary text-center lg:text-left leading-10 lg:leading-[1.5] bg-no-repeat bg-left-bottom mt-1">
                Get accessible
                <br />
                <span className="bg-heading bg-no-repeat bg-bottom">
                  real-time data &nbsp;
                </span>
                in Africa
              </Heading>
              <SmallText className="mt-12 text-center lg:text-left leading-7 mb-12">
                MobileForms is a Data collection and analytics platform that
                empowers decision-makers with real-time actionable intelligence
                gotten directly from individuals living in African communities.
              </SmallText>
            </div>
            <div
              className="flex items-center lg:items-start lg:justify-start justify-center lg:mb-0"
              data-aos="fade-up"
            >
              <Link href="#contact">
                <Button className=" mb-12 lg:mb-0" label="Get In Touch" />
              </Link>
            </div>
          </div>

          <div
            className="relative pt-[56.25%] lg:pt-0 rounded-md overflow-hidden"
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
          >
            <ReactPlayer
              url="https://youtu.be/hjXbb_gMDtc"
              className="left-0 top-0 absolute rounded-[50px]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
