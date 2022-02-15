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
  isOpen,
}) => {
  return (
    <Link href={href || '/'}>
      <div>
        <li
          className={[
            'flex items-center content-between w-100 py-2 md:py-4 lg:py-0 lg:w-auto mt-10 lg:mt-0 cursor-pointer',
            ,
            className,
          ].join(' ')}
        >
          <SmallHeading className="capitalize">{linkText}</SmallHeading>
          {isDropDownMenu && (
            <div className="ml-2">
              {/* <Image src={arrowDown} /> */}

              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L0.5 0.5H9.5L5 5Z"
                  fill={`${isOpen ? '#ffffff' : '#0F375A'}`}
                />
              </svg>
            </div>
          )}
        </li>
        {dropDownContent && children}
      </div>
    </Link>
  );
};

export default NavLink;
