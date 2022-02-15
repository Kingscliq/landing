import Image from 'next/image';
import React from 'react';
import { arrowDown } from '../../../assets/icons';
import { SmallHeading } from '../text';

const Link = ({
  href,
  isDropDownMenu,
  dropDownContent,
  children,
  linkText,
}) => {
  return (
    <Link href={href || '/'}>
      <div>
        <li className="flex items-center content-between text-primary w-100 py-4 lg:py-0 lg:w-auto mt-10 lg:mt-0">
          <SmallHeading>{linkText}</SmallHeading>
          {isDropDownMenu && (
            <div>
              <Image src={arrowDown} />
            </div>
          )}
        </li>
        {dropDownContent && children}
      </div>
    </Link>
  );
};

export default Link;
