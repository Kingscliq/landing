import Image from 'next/image';
import React from 'react';
import { arrowDown } from '../../../assets/icons';
import { SmallHeading } from '../text';
import Link from 'next/link';
const NavLink = ({
  href,
  isDropDownMenu,
  dropDownContent,
  children,
  linkText,
  className,
}) => {
  return (
    <Link href={href || '/'}>
      <div>
        <li
          className={[
            'flex items-center content-between text-primary w-100 py-4 lg:py-0 lg:w-auto mt-10 lg:mt-0',
            ,
            className,
          ].join(' ')}
        >
          <SmallHeading className="capitalize">{linkText}</SmallHeading>
          {isDropDownMenu && (
            <div className="ml-2">
              <Image src={arrowDown} />
            </div>
          )}
        </li>
        {dropDownContent && children}
      </div>
    </Link>
  );
};

export default NavLink;
