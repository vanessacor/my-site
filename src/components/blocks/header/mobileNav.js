import React, { Component } from "react";
import { Link } from "react-router-dom";

class MobileNav extends Component {
  state = {
    toggled: false,
  };
  // this.showMenu = this.showMenu.bind(this);
  // this.hideMenu = this.hideMenu.bind(this);

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
      <div className="mobile-nav">
        <button className="mobile-nav-button" onClick={this.showMenu}>
          <i className="icon ion-md-menu"></i>
        </button>
        {toggled && (
          <div className="mobile-nav-menu">
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

            <Link onClick={this.hideMenu} className="nav-item" to="/contact">
              Contact
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default MobileNav;
