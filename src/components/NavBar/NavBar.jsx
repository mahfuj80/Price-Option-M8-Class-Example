// import React from 'react';
import { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'NotFound', path: '*' },
  ];
  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="md:hidden">
        <div
          className="md:hidden max-w-fit cursor-pointer text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <ImCross></ImCross>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <ul
          className={`p-4 text-center duration-1000  absolute ${
            open ? 'left-8' : '-left-60'
          } px-6 bg-yellow-200 shadow-xl`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
      <ul className={`hidden md:flex  text-center  px-6 bg-yellow-200`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
