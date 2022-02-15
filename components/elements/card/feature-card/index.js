import Image from 'next/image';
import React from 'react';
import { analytics } from '../../../../assets/icons';
import { SmallText, Subheading } from '../../text';

const FeatureCard = ({ icon, description, title }) => {
  return (
    <section>
      <div>
        <Image src={icon || analytics} />
      </div>
      <div className="mt-3">
        <Subheading className="text-md text-primary">
          {title || 'This is a Title'}
        </Subheading>
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
