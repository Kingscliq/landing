import React, { useState } from 'react';
import Image from 'next/image';

import { crowdforceLogo, hamburger } from '../../../assets/icons';
import Button from '../../elements/button';

import NavLink from '../../elements/link';

const NavBar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  return (
    <nav className="block justify-start lg:flex lg:items-center lg:justify-between flex-wrap container p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span>
          <Image src={crowdforceLogo} />
        </span>
      </div>
      <div
        // initial={toggleMobile ? { y: -300 } : null}
        // animate={toggleMobile ? { y: 0 } : null}
        // transition={
        //   toggleMobile
        //     ? {
        //         delay: 1,
        //         y: { type: 'spring', stiffness: 100 },
        //         default: { duration: 1 },
        //       }
        //     : null
        // }
        className={`${
          toggleMobile ? 'block' : 'hidden'
        } lg:flex justify-start items-start lg:justify-around lg:items-center flex-wrap transition-all`}
      >
        <div>
          <ul className="list-none block justify-start lg:justify-between lg:flex flex-wrap items-start lg:items-center">
            {/* <li className="text-primary w-100 py-4 lg:py-0 lg:w-auto mt-10 lg:mt-0">
              Products
            </li> */}
            <NavLink href={'/'} linkText="Products" isDropDownMenu={true} />
            <NavLink
              href={'/'}
              linkText="Industry"
              isDropDownMenu={true}
              className="ml-0 lg:ml-7  text-primary lg:mt-0 w-100 py-4 lg:py-0"
            />
            <NavLink
              href={'/'}
              linkText="About"
              className="ml-0 lg:ml-7 text-primary lg:mt-0 w-100 py-4 lg:py-0"
            />
            <NavLink
              href={'/'}
              linkText="Become a Field Agent"
              className="ml-0 lg:ml-7 text-primary lg:mt-0 w-100 py-4 lg:py-0"
            />
            {/* <li className="">
              Industry
            </li> */}
            {/* <li className="">About</li>
            <li className="">Become a Field Agent</li> */}
          </ul>
        </div>
        <div className="ml-0 lg:ml-7 block lg:flex lg:justify-between lg:items-center items mt-3 lg:mt-0">
          <div>
            <Button
              label="Login"
              variant="secondary"
              className="text-primary hover:text-white mr-2 lg:mt-0 w-full lg:w-auto border-secondary"
            />
          </div>
          <div>
            <Button label="Sign Up" className="mt-1 lg:mt-0 w-full lg:w-auto" />
          </div>
        </div>
      </div>
      <div
        className="absolute right-6 top-6 block md:hidden cursor-pointer"
        onClick={prev => {
          console.log(toggleMobile);
          setToggleMobile(prev => !prev);
        }}
      >
        <Image src={hamburger} />
      </div>
    </nav>
  );
};

export default NavBar;
