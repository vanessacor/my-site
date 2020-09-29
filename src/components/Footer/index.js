import React, { useState, useEffect } from "react";
import "./style.scss";

function Footer() {
  const [mail, show] = useState(false);

  useEffect(() => {
    console.log(mail);
  }, [mail]);

  return (
    <footer className="Footer">
      {mail && <p className="mail">vanessapcbarros@gmail.com</p>}
      <ul className="Footer-media">
        <li className="Footer-media-item">
          <a
            href="https://www.linkedin.com/in/vanessapoppe/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <i className="icon ion-logo-linkedin"></i>
          </a>
        </li>
        <li className="Footer-media-item">
          <a
            href="https://github.com/vanessacor"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <i className="icon ion-logo-github"></i>
          </a>
        </li>
        <li className="Footer-media-item">
          <button arial-label="show email" onClick={() => show(!mail)}>
            <i className="icon ion-md-mail"></i>
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
