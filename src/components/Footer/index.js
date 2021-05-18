import React, { useState } from 'react';
import './style.scss';

function Footer() {
  const [showMail, setShowMail] = useState(false);

  return (
    <footer className="Footer">
      {showMail && <p className="mail">vanessapcbarros@gmail.com</p>}
      <ul className="Footer-media">
        <li className="Footer-media-item">
          <a href="https://www.linkedin.com/in/vanessapoppe/" target="_blank" rel="noreferrer" aria-label="Linkedin">
            <i className="icon ion-logo-linkedin" />
          </a>
        </li>
        <li className="Footer-media-item">
          <a href="https://github.com/vanessacor" target="_blank" rel="noreferrer" aria-label="Github">
            <i className="icon ion-logo-github" />
          </a>
        </li>
        <li className="Footer-media-item">
          <button type="button" arial-label="show email" onClick={() => setShowMail(!showMail)}>
            <i className="icon ion-md-mail" />
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
