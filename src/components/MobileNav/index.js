import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

class MobileNav extends Component {
  state = {
    toggled: false,
  };

  showMenu = () => {
    this.setState(function (prevState) {
      return {
        toggled: !prevState.toggled,
      };
    });
  };

  hideMenu = () => {
    this.setState(function () {
      return {
        toggled: false,
      };
    });
  };

  render() {
    const { toggled } = this.state;
    return (
      <div className="MobileNav">
        <button
          className="MobileNav-button"
          aria-label="show and hide menu"
          onClick={this.showMenu}
        >
          <i className="icon ion-md-menu"></i>
        </button>
        {toggled && (
          <div className="MobileNav-menu container">
            <Link onClick={this.hideMenu} className="nav-item" to="/">
              Home
            </Link>

            <Link onClick={this.hideMenu} className="nav-item" to="/about">
              About
            </Link>

            <Link onClick={this.hideMenu} className="nav-item" to="/portfolio">
              Portfolio
            </Link>

            <Link onClick={this.hideMenu} className="nav-item" to="/work">
              Work
            </Link>

            {/* <Link onClick={this.hideMenu} className="nav-item" to="/contact">
              Contact
            </Link> */}
          </div>
        )}
      </div>
    );
  }
}

export default MobileNav;
