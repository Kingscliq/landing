import React from 'react';
import Image from 'next/image';

import { crowdforceLogo } from '../../../assets/icons';
import Button from '../../elements/button';

const NavBar = () => {
  return (
    <nav className="block justify-start lg:flex lg:items-center lg:justify-between flex-wrap container p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span>
          <Image src={crowdforceLogo} />
        </span>
      </div>
      <div className="block lg:flex justify-start items-start lg:justify-around lg:items-center flex-wrap">
        <div>
          <ul className="list-none block justify-start lg:justify-between lg:flex flex-wrap items-start lg:items-center">
            <li className="text-primary w-100 py-4 lg:py-0 lg:w-auto mt-10 lg:mt-0">
              Products
            </li>
            <li className="ml-0 lg:ml-7  text-primary lg:mt-0 w-100 py-4 lg:py-0">
              Industry
            </li>
            <li className="ml-0 lg:ml-7 text-primary lg:mt-0 w-100 py-4 lg:py-0">
              About
            </li>
            <li className="ml-0 lg:ml-7 text-primary lg:mt-0 w-100 py-4 lg:py-0">
              Become a Field Agent
            </li>
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
    </nav>
  );
};

export default NavBar;
