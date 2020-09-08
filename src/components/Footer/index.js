import React, { useState } from "react";
import "./style.scss";

function Footer() {
  const [mail, show] = useState(false);

  return (
    <footer className="Footer">
      {mail && <p className="mail">vanessapcbarros@gmail.com</p>}
      <ul className="Footer-media">
        <li className="Footer-media-item">
          <a
            href="https://www.linkedin.com/in/vanessapoppe/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-logo-linkedin" hrf=""></i>
          </a>
        </li>
        <li className="Footer-media-item">
          <a
            href="https://github.com/vanessacor"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-logo-github"></i>
          </a>
        </li>
        <li className="Footer-media-item">
          <button onClick={() => show(!mail)}>
            <i className="icon ion-md-mail"></i>
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
