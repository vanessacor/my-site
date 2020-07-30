import React, { Component } from "react";

import "./style.scss";

class ScrollUpBtn extends Component {
  constructor() {
    super();
    this.state = {
      scrollDown: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.checkScroll();
    });
  }

  checkScroll = () => {
    if (window.pageYOffset > 300) {
      this.setState({
        scrollDown: true,
      });
    } else {
      this.setState({
        scrollDown: false,
      });
    }
  };

  goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { scrollDown } = this.state;
    return (
      <div>
        {scrollDown && (
          <button onClick={this.goToTop} className="scrollUpBtn">
            Top
          </button>
        )}
      </div>
    );
  }
}

export default ScrollUpBtn;
