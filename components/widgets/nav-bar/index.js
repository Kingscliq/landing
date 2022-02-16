import React, { useState } from 'react';
import Image from 'next/image';

import { crowdforceLogo, hamburger } from '../../../assets/icons';
import Button from '../../elements/button';

import NavLink from '../../elements/link';
import { useRouter } from 'next/router';

import Link from 'next/link';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-0.5 w-full my-1 rounded-full bg-primary transition ease transform duration-300`;

  return (
    <nav className="block justify-start lg:flex lg:items-center items-center lg:justify-between flex-wrap p-8">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span>
          <Image src={crowdforceLogo} />
        </span>
      </div>
      <div
        className={`lg:flex justify-start left-0 right-0 translate-x-[-50rem]  items-start px-3 py-4 md:py-0 md:px-0 bg-primary text-white md:text-primary md:bg-transparent w-full z-20 md:w-auto lg:justify-around lg:items-center flex-wrap absolute md:static md:translate-x-0 transition ease transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-[-50rem]'
        }`}
      >
        <div>
          <div
            className={`list-none block justify-start lg:justify-between lg:flex flex-wrap items-start lg:items-center`}
          >
            <NavLink
              href="/think"
              linkText="Products"
              isDropDownMenu={true}
              isOpen={isOpen}
            />
            <NavLink
              href="/industry"
              linkText="Industry"
              isDropDownMenu={true}
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
            <NavLink
              href={'/about'}
              linkText="About"
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
            <NavLink
              href="/agents"
              linkText="Become a Field Agent"
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
          </div>
        </div>
        <div className="ml-0 lg:ml-7 block lg:flex lg:justify-between lg:items-center items mt-3 lg:mt-0">
          <div>
            <Button
              label="Login"
              variant="secondary"
              className="text-white md:text-primary hover:text-white mr-2 lg:mt-0 w-full lg:w-auto md:border-0 border border-white md:border-secondary"
            />
          </div>
          <div>
            <Button label="Sign Up" className="mt-1 lg:mt-0 w-full lg:w-auto" />
          </div>
        </div>
      </div>
      <button
        aria-label="hamburger menu"
        className="flex flex-col h-7 w-7 justify-center items-center group sm:hidden absolute top-8 right-8"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
    </nav>
  );
};

export default NavBar;
