import React from "react";

import "./style.scss";

function Footer() {
  return (
    <footer className="Footer">
      <ul className="Footer-media">
        <li className="Footer-media-item">
          <a href="https://www.linkedin.com/in/vanessapoppe/" target="_blank">
            <i className="icon ion-logo-linkedin" hrf=""></i>
          </a>
        </li>
        <li className="Footer-media-item">
          <a href="https://github.com/vanessacor" target="_blank">
            <i className="icon ion-logo-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;