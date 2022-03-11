import Image from 'next/image';
import React from 'react';
import { crowdforceLogo } from '../../../assets/icons';
import { SmallText } from '../../elements/text';

const CopyRights = () => {
  return (
    <div className="flex items-start lg:items-center justify-center flex-col mt-24 mb-0 container py-12">
      <div>
        <SmallText className="text-sm text-primary">
          © 2021 CrowdForce. All Rights Reserved
        </SmallText>
      </div>
    </div>
  );
};

export default CopyRights;
