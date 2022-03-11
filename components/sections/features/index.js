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
    <section className="mb-11 px-0 lg:px-16">
      <div className="container ">
        <Heading className="text-center bg-heading text-primary bg-no-repeat bg-bottom mt-24">
          Features
        </Heading>
        <div className="grid lg:grid-cols-3 gap-20 mt-20">
          <FeatureCard
            title="Analyze Real-time Data"
            icon={analytics}
            description="Our analytics dashboard and access to our network of field agents provide access to real-time data required.
"
          />
          <FeatureCard
            title="Smart Launch"
            icon={speaker}
            description="Create survey forms to get answers and actionable insights."
          />
          <FeatureCard
            title="Create Surveys"
            icon={survey}
            description="Launch a new product or service by smart targeting how a community or individuals perceives it."
          />
          <FeatureCard
            title="Consumer Insights"
            icon={insight}
            description="Get consumer insights and perspectives of how they feel about your products and services.
"
          />
          <FeatureCard
            title="Retail Audits"
            icon={pen}
            description="Measure and monitor retail success by analyzing your customer’s experience with your products in-store and verifying your retailer's outlet.
            "
          />
          <FeatureCard
            title="Data Collection"
            icon={data}
            description="Collate responses either through our offline (via our field agent network) and online channel of your choice."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
