import React from "react";
import { NavLink } from "react-router-dom";

function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <NavLink className="menu-item" activeClassName="selected" exact to="/">
        Home
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/about">
        About
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/work">
        Work
      </NavLink>
      <NavLink className="menu-item" activeClassName="selected" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default DesktopNav;
