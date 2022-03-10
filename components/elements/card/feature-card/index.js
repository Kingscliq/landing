import Image from 'next/image';
import React from 'react';
import { analytics } from '../../../../assets/icons';
import { SmallText, Subheading } from '../../text';

const FeatureCard = ({ icon, description, title }) => {
  return (
    <section data-aos="zoom-in-left">
      <div>
        <Image src={icon || analytics} alt="crowdforce icons" />
      </div>
      <div className="mt-3">
        <h2 className="text-md font-bold text-primary">
          {title || 'This is a Title'}
        </h2>
      </div>
      <div className="mt-3">
        <SmallText>
          <p>
            {description ||
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet veritatis placeat dicta. Doloribus ipsum provident nemo incidunt commodi consequuntur'}
          </p>
        </SmallText>
      </div>
    </section>
  );
};

export default FeatureCard;
