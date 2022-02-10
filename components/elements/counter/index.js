import React from 'react';
import { Heading, SmallText } from '../text';

const Counter = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center py-16 ">
      <Heading className="text-primary">{title || '45'}</Heading>
      <SmallText>{description || 'Description'}</SmallText>
    </div>
  );
};

export default Counter;
