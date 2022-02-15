import React from 'react';
import TestimonialCard from '../../elements/card/testimonial-card';
import { Subheading } from '../../elements/text';

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container py-28">
        <Subheading className="bg-heading bg-no-repeat bg-left-bottom text-primary">
          Don’t take our word for it.
          <br />
          Trust our clients.
        </Subheading>
        <div className="grid md:grid-cols-3 gap-5 mt-20">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
