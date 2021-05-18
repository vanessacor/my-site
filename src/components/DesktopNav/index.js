import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

function DesktopNav() {
  return (
    <nav className="DesktopNav">
      <NavLink className="DesktopNav-item" activeClassName="selected" exact to="/">
        Home
      </NavLink>
      <NavLink className="DesktopNav-item" activeClassName="selected" to="/about">
        About
      </NavLink>
      <NavLink className="DesktopNav-item" activeClassName="selected" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="DesktopNav-item" activeClassName="selected" to="/work">
        Work
      </NavLink>
    </nav>
  );
}

export default DesktopNav;
