import React, { useState } from 'react';
import Image from 'next/image';

import { crowdforceLogo, hamburger } from '../../../assets/icons';
import Button from '../../elements/button';

import NavLink from '../../elements/link';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { SmallText } from '../../elements/text';
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
              dropDownContent={true}
            >
              <ul className="dropdown-menu absolute hidden bg-dropDown w-48">
                <Link href="/">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Mobile Forms</a>
                  </li>
                </Link>
                <Link href="https://crowdforce.io/payforce">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Payforce</a>
                  </li>
                </Link>
              </ul>
            </NavLink>
            <NavLink
              href="/industry"
              linkText="Industry"
              isDropDownMenu={true}
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
              dropDownContent={true}
            >
              <ul className="dropdown-menu absolute hidden bg-dropDown w-48 ml-7">
                <Link href="https://crowdforce.io/market-research">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Market Research</a>
                  </li>
                </Link>
                <Link href="https://crowdforce.io/fintech">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Bank and Fintech</a>
                  </li>
                </Link>
                <Link href="https://crowdforce.io/government-nonprofit">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Government</a>
                  </li>
                </Link>
                <Link href="https://crowdforce.io/government-nonprofit">
                  <li className="text-xs p-4 hover:bg-primary hover:text-white transition ease duration-500">
                    <a target="_blank">Non-Profit</a>
                  </li>
                </Link>
              </ul>
            </NavLink>
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
        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 mt-8">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        aria-label="hamburger menu"
        className="flex flex-col h-7 w-7 justify-center items-center group md:hidden absolute top-8 right-8"
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
