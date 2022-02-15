import React, { useState } from 'react';
import Image from 'next/image';

import { crowdforceLogo, hamburger } from '../../../assets/icons';
import Button from '../../elements/button';

import NavLink from '../../elements/link';
import { useRouter } from 'next/router';
const navRoutes = [
  { id: 1, name: 'Products', href: '/' },
  { id: 2, name: 'Industry', href: '/' },
  { id: 3, name: 'About', href: '/' },
  { id: 4, name: 'Become a Field Agent', href: '/' },
];

import Link from 'next/link';
const NavBar = () => {
  // const [toggleMobile, setToggleMobile] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-0.5 w-full my-1 rounded-full bg-primary transition ease transform duration-300`;
  return (
    <nav className="block justify-start lg:flex lg:items-center items-center lg:justify-between flex-wrap p-8">
      {/* // <nav> */}
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
        {/* <div
        className={`lg:flex justify-start items-start lg:justify-around lg:items-center flex-wrap z-20 w-full h-4/5 py-16 md:h-14 md:py-0 bg-transparent md:bg-transparent md:backdrop-blur-xl transition-all duration-1000 ease-linear ${
          isOpen ? ' active' : ' notActive'
        }`}
      > */}
        <div>
          <ul
            className={`list-none block justify-start lg:justify-between lg:flex flex-wrap items-start lg:items-center`}
          >
            <NavLink
              href={'/'}
              linkText="Products"
              isDropDownMenu={true}
              isOpen={isOpen}
            />
            <NavLink
              href={'/'}
              linkText="Industry"
              isDropDownMenu={true}
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
            <NavLink
              href={'/'}
              linkText="About"
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
            <NavLink
              href={'/'}
              linkText="Become a Field Agent"
              className="ml-0 lg:ml-7 text-white md:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              isOpen={isOpen}
            />
          </ul>
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

//     <section className="hero">
//       <section className="lg:px-20 2xl:px-40 md:px-12 px-6 py-4 flex items-center justify-between border-b border-solid border-secondary w-full bg-backdrop sm:backdrop-blur-xl md:bg-transparent">
//         <Link href="/">
//           <a>
//             <Image src={crowdforceLogo} />
//           </a>
//         </Link>
//         <button
//           aria-label="hamburger menu"
//           className="flex flex-col h-7 w-7 justify-center items-center group md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div
//             className={`${genericHamburgerLine} ${
//               isOpen
//                 ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
//                 : 'opacity-50 group-hover:opacity-100'
//             }`}
//           />
//           <div
//             className={`${genericHamburgerLine} ${
//               isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
//             }`}
//           />
//           <div
//             className={`${genericHamburgerLine} ${
//               isOpen
//                 ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
//                 : 'opacity-50 group-hover:opacity-100'
//             }`}
//           />
//         </button>
//         {/* <section className="hidden md:flex">
//           <a
//             href="tel:+2349065383758"
//             className="border-b border-solid font-regular leading-none text-white md:text-sm lg:text-lg border-white transition duration-500 ease-in-out hover:text-priColor z-10 hidden md:block mr-5"
//           >
//             (+234) 906 538 3758
//           </a>
//           <a
//             href="mailto:info@anettransport.com"
//             className="border-b border-solid font-regular leading-none text-white md:text-sm lg:text-lg border-white transition duration-500 ease-in-out hover:text-priColor z-10 hidden md:block"
//           >
//             info@anettransport.com
//           </a>
//         </section> */}
//       </section>
//       <nav
//         className={`md:block my-2 md:my-3 absolute md:relative z-20 w-full h-4/5 py-16 md:h-14 md:py-0 bg-transparent md:bg-transparent md:backdrop-blur-xl transition-all duration-1000 ease-linear ${
//           isOpen ? ' active' : ' notActive'
//         }`}
//       >
//         <ul className="flex px-6 md:px-0 md:items-center justify-between md:flex-row md:py-4 md:w-4/5 lg:w-9/12 mx-auto flex-col h-4/5 md:h-full items-start transition-all duration-700 ease-linear delay-100">
//           {navRoutes.map(route => (
//             <li key={route.id} onClick={() => setIsOpen(!isOpen)}>
//               <Link href={route.href}>
//                 <a
//                   className={
//                     (router.pathname === route.href ? 'active ' : '') +
//                     'text-xl md:text-base lg:text-lg text-primary transition duration-500 ease-in-out z-10 flex items-center justify-center md:font-normal'
//                   }
//                 >
//                   {route.name}
//                 </a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </section>
//   );
// };
