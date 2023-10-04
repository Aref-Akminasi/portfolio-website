import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavGroup from './NavGroup';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-lightGray flex items-center py-32">
      <Container className="flex flex-col lg:flex-row space-y-16 lg:justify-between lg:space-y-0 px-16">
        <Logo />
        {/* Nav Menu */}
        <NavGroup title="Menu">
          <li>
            <Link to="portfolio" className="text-base md:text-base">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="about" className="text-base md:text-base">
              About
            </Link>
          </li>
          <li>
            <Link to="contact" className="text-base md:text-base">
              Contact
            </Link>
          </li>
        </NavGroup>

        {/* Contacts */}
        <NavGroup title="Contacts">
          <li className="flex space-x-3 items-center">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:akminasiaref@gmail.com">akminasiaref@gmail.com</a>
          </li>
          <li className="flex space-x-3 items-center">
            <i className="fa-solid fa-phone text-base"></i>
            <span>+31 618832668</span>
          </li>
        </NavGroup>

        {/* Social media */}
        <NavGroup title="Social media">
          <li>
            <SocialMedia />
          </li>
        </NavGroup>
      </Container>
    </footer>
  );
};

export default Footer;
