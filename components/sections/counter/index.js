import React from 'react';
import Counter from '../../elements/counter';

const CounterSection = () => {
  return (
    <div className="block lg:grid items-center grid-cols-4 justify-center bg-white w-full h-auto lg:h-56 px-32">
      <Counter title="4.5k" description="data points" />
      <Counter title="500" description="projects" />
      <Counter title="98%" description="accuracy" />
      <Counter title="< 3hrs" description="response time" />
    </div>
  );
};

export default CounterSection;
