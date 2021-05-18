import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function MobileNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="MobileNav">
      <button
        type="button"
        className="MobileNav-button"
        aria-label="show and hide menu"
        onClick={() => setToggle(true)}
      >
        <i className="icon ion-md-menu" />
      </button>
      {toggle && (
        <div className="MobileNav-menu container">
          <Link onClick={() => setToggle(false)} className="nav-item" to="/">
            Home
          </Link>

          <Link onClick={() => setToggle(false)} className="nav-item" to="/about">
            About
          </Link>

          <Link onClick={() => setToggle(false)} className="nav-item" to="/portfolio">
            Portfolio
          </Link>

          <Link onClick={() => setToggle(false)} className="nav-item" to="/work">
            Work
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
