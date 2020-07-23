import React from "react";

import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";

import "./style.scss";

function Header() {
  return (
    <div className="Header container">
      <h1>
        Vanessa <br />
        Poppe
      </h1>
      <DesktopNav />
      <MobileNav />
    </div>
  );
}

export default Header;
