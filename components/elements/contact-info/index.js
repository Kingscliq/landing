import Image from 'next/image';
import React from 'react';
import { phone } from '../../../assets/icons';
import { SmallText } from '../text';
const ContactInfo = ({ info, icon }) => {
  return (
    <div className="flex justify-start items-center text-white">
      <div>
        <Image src={icon || phone} alt="Contact Icon" />
      </div>
      <div className="ml-4">
        <SmallText>{info || '+234 812 908 6629'}</SmallText>
      </div>
    </div>
  );
};

export default ContactInfo;
