import React from 'react';
import {
  ePlatform,
  francis,
  hsdf,
  kola,
  Laye_HSDF,
  Merijn,
  vpOsibanjo,
  vpseal,
  accounteer,
} from '../../../assets/images';
import TestimonialCard from '../../elements/card/testimonial-card';
import { Subheading } from '../../elements/text';

const Testimonials = () => {
  return (
    <section className="bg-white px-0 md:px-16">
      <div className="container py-28">
        <Subheading className="bg-heading bg-no-repeat bg-bottom text-primary text-center">
          Don’t take our word for it.
          <br />
          Trust our clients.
        </Subheading>
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          <TestimonialCard
            img={vpOsibanjo}
            title="Vice President of Nigeria"
            name="Prof. Yemi Osinbajo"
            logo={vpseal}
            logoHeight={50}
            logoWidth={50}
            description="The company has created a platform that enables businesses and governments to crowdsource data from across the African Continent."
          />
          <TestimonialCard img={francis} />

          <TestimonialCard
            img={Laye_HSDF}
            name="Olayiwola olatawura"
            title="Associate Director Programs, HSDF"
            logo={hsdf}
            logoHeight="35"
            logoWidth="200"
            description="Crowdforce is a trusted and very reliably partner. They have deployed innovative approaches with high quality assurance standards to conducting"
          />
          <TestimonialCard
            img={kola}
            title="Chief Executive Officer"
            name="Kola Aina"
            logo={ePlatform}
            logoHeight={50}
            logoWidth={100}
            description="We gain access to real time market data and a reliable mobile data platform that fits seamlessly into our existing solutions."
          />
          <TestimonialCard
            img={Merijn}
            title="Chief Executive Officer"
            name="Merijn Campsteyn"
            logo={accounteer}
            description="Being a European company, Mobile Forms was the only service provider that could connect us with an offline audience in Africa."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
