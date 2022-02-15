import React from 'react';
import {
  analytics,
  data,
  insight,
  pen,
  speaker,
  survey,
} from '../../../assets/icons';
import FeatureCard from '../../elements/card/feature-card';
import { Heading } from '../../elements/text';

const Features = () => {
  return (
    <section className="mb-11">
      <div className="container ">
        <Heading className="text-center bg-heading text-primary bg-no-repeat bg-bottom mt-24">
          Features
        </Heading>
        <div className="grid md:grid-cols-3 gap-20 mt-20">
          <FeatureCard title="Analyze Real-time Data" icon={analytics} />
          <FeatureCard title="Smart Launch" icon={speaker} />
          <FeatureCard title="Create Surveys" icon={survey} />
          <FeatureCard title="Consumer Insights" icon={insight} />
          <FeatureCard title="Retail Audits" icon={pen} />
          <FeatureCard title="Data Collection" icon={data} />
        </div>
      </div>
    </section>
  );
};

export default Features;
