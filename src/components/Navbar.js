import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar w-nav" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner">
      <div className="navbar-wrapper">
        <Link to="/" className="brand w-nav-brand">
          <img src="images/logo.png" loading="lazy" alt="" className="nav_logo" />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="nav_left">
            <Link to="/" aria-current="page" className="nav_link w-nav-link w--current">
              HOME
            </Link>
            <Link to="/all" className="nav_link w-nav-link">
              ALL
            </Link>
            <Link to="/women" className="nav_link w-nav-link">
              WOMEN
            </Link>
            <Link to="/men" className="nav_link w-nav-link">
              MEN
            </Link>
          </div>
          <div className="nav_right lg">
            <Link to="/cart" className="nav_cart w-inline-block">
              <img src="images/cart_icon.png" loading="lazy" alt="" />
            </Link>
          </div>
        </nav>
        <div className="nav_right md">
          <Link to="/cart" className="nav_cart w-inline-block">
            <img src="images/cart_icon.png" loading="lazy" alt="" />
          </Link>
        </div>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
