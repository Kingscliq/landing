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
    <section>
      <div className="container">
        <nav className="block justify-start lg:flex lg:items-center items-center lg:justify-between flex-wrap lg:px-8 px-0 py-6">
          <div className="flex items-center flex-shrink-0 mr-6 cursor-pointer">
            <Link href="https://crowdforce.io">
              <span>
                <Image src={crowdforceLogo} alt="CrowdForce logo" />
              </span>
            </Link>
          </div>
          <div
            className={`lg:flex justify-start left-0 right-0 translate-x-[-50rem] items-start px-[2.5rem] py-4 lg:py-0 lg:px-0 bg-primary text-white lg:text-primary lg:bg-transparent w-full z-20 lg:w-auto lg:justify-around lg:items-center flex-wrap absolute lg:static lg:translate-x-0 transition ease transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-[-80rem]'
            }`}
          >
            <div>
              <div
                className={`list-none block justify-start lg:justify-between lg:flex flex-wrap items-start lg:items-center`}
              >
                <NavLink
                  href="/"
                  linkText="Products"
                  isDropDownMenu={true}
                  isOpen={isOpen}
                  dropDownContent={true}
                >
                  <ul className="dropdown-menu absolute hidden bg-white lg:bg-dropDown w-48 z-10">
                    <Link href="/">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Mobile Forms</a>
                      </li>
                    </Link>
                    <Link href="https://crowdforce.io/payforce">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Payforce</a>
                      </li>
                    </Link>
                  </ul>
                </NavLink>
                <NavLink
                  href="/"
                  linkText="Industry"
                  isDropDownMenu={true}
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                  dropDownContent={true}
                >
                  <ul className="dropdown-menu absolute hidden bg-white lg:bg-dropDown w-48 ml-0 lg:ml-7 z-10">
                    <Link href="https://crowdforce.io/market-research">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Market Research</a>
                      </li>
                    </Link>
                    <Link href="https://crowdforce.io/fintech">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Bank and Fintech</a>
                      </li>
                    </Link>
                    <Link href="https://crowdforce.io/government-nonprofit">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Government</a>
                      </li>
                    </Link>
                    <Link href="https://crowdforce.io/government-nonprofit">
                      <li className="text-xs text-secondary p-4 hover:text-white hover:bg-primary lg:hover:text-white transition ease duration-500">
                        <a target="_blank">Non-Profit</a>
                      </li>
                    </Link>
                  </ul>
                </NavLink>
                <NavLink
                  href="https://crowdforce.io/about"
                  linkText="About"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
                <NavLink
                  href="https://crowdforce.io/field-agent"
                  linkText="Become a Field Agent"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
              </div>
            </div>
            <div className="ml-0 lg:ml-7 block lg:flex lg:justify-between lg:items-center items mt-3 lg:mt-0">
              <div>
                <Button
                  label="Login"
                  variant="secondary"
                  className="text-white lg:w-64 lg:text-secondary lg:hover:text-primary lg:ml-[-20px] hover:text-white mr-2 mb-4 lg:mb-0 lg:mt-0 w-full lg:w-auto lg:border-0 border border-white lg:border-secondary"
                />
              </div>
              <div>
                <Button
                  label="Sign Up"
                  className="mt-1 lg:mt-0 w-full lg:w-auto"
                />
              </div>
            </div>
          </div>
          <button
            aria-label="hamburger menu"
            className="flex flex-col h-7 w-7 justify-center items-center group lg:hidden absolute top-8 right-8"
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
      </div>
    </section>
  );
};

export default NavBar;
