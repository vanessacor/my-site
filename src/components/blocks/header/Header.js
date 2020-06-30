import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./mobileNav";

function Header() {
  return (
    <div className="header">
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
