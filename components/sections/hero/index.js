import React from 'react';
import NavBar from '../../../components/widgets/nav-bar';
import Button from '../../../components/elements/button';
import {
  Heading,
  SmallHeading,
  SmallText,
  Subheading,
} from '../../../components/elements/text';
import FeatureCard from '../../elements/card/feature-card';
import TestimonialCard from '../../elements/card/testimonial-card';
import Input from '../../elements/input';
import TextArea from '../../elements/textarea';
import Counter from '../../elements/counter';
import Image from 'next/image';
import { placeholderVideo } from '../../../assets/images';
const Hero = () => {
  return (
    <section className="bg-skyblue w-screen h-auto py-4 md:py-36">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <SmallHeading className="text-center md:text-left mb-3">
              Mobile Forms
            </SmallHeading>
            <Heading className="text-primary text-center md:text-left leading-10 md:leading-[65px] bg-heading bg-no-repeat bg-left-bottom">
              Get accessible real-time data in Africa
            </Heading>
            <SmallText className="mt-5 text-center md:text-left leading-7">
              Data and analytics platform that empowers decision makers with
              real-time, actionable intelligence gotten directly from real
              individuals living in the communities.
            </SmallText>
            <div className="flex items-center md:items-start md:justify-start justify-center mb-4 md:mb-0">
              <Button className="mt-5 mb-12 md:mb-0" label="Get In Touch" />
            </div>
          </div>
          <div>
            <Image src={placeholderVideo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
