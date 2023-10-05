import React from 'react';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Nav = () => {
  return (
    <nav className="mb-24 sticky top-0 bg-white z-50">
      <Container className="py-4 px-2 flex flex-col md:flex-row justify-between items-center space-y-8">
        <Logo />

        <ul className="space-x-12 md:space-x-16">
          <li className="inline-block">
            <NavLink to="portfolio" className="font-bold text-base md:text-lg">
              Portfolio
            </NavLink>
          </li>
          <li className="inline-block">
            <NavLink to="about" className="font-bold text-base md:text-lg">
              About
            </NavLink>
          </li>
          <li className="inline-block">
            <NavLink to="contact" className="font-bold text-base md:text-lg">
              Contact
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
