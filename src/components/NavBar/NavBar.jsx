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
    <nav>
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open === true ? <ImCross></ImCross> : <AiOutlineMenu></AiOutlineMenu>}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
