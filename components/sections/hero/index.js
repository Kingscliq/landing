import React from 'react';
import Button from '../../../components/elements/button';
import {
  Heading,
  SmallHeading,
  SmallText,
  Subheading,
} from '../../../components/elements/text';

import ReactPlayer from 'react-player';
const Hero = () => {
  return (
    <section className="bg-skyblue h-auto py-4 md:py-36 px-0 md:px-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <div data-aos="fade-down">
              <SmallHeading className="text-center md:text-left">
                Mobile Forms
              </SmallHeading>
            </div>

            <Heading className="text-primary text-center md:text-left leading-10 md:leading-[65px] bg-no-repeat bg-left-bottom mt-1 mb-16">
              Get accessible
              <br />
              <span className="bg-heading bg-no-repeat bg-bottom">
                real-time data
              </span>{' '}
              in Africa
            </Heading>
            <SmallText className="mt-5 text-center md:text-left leading-7 mb-12">
              MobileForms is a Data collection and analytics platform that
              empowers decision-makers with real-time actionable intelligence
              gotten directly from individuals living in African communities
            </SmallText>
            <div
              className="flex items-center md:items-start md:justify-start justify-center  md:mb-0"
              data-aos="fade-up"
            >
              <Button className=" mb-12 md:mb-0" label="Get In Touch" />
            </div>
          </div>

          <div
            className="relative pt-[56.25%] md:pt-0"
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
          >
            <ReactPlayer
              url="https://youtu.be/TgYAY5aYh7I"
              className="left-0 top-0 absolute"
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
