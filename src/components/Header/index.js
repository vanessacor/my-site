import React from "react";

import DesktopNav from "../DesktopNav";
import MobileNav from "../MobileNav";

function Header() {
  return (
    <div className="header container">
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
