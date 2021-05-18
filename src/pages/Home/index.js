import React from 'react';

import './style.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="Home-intro">
        <h2>
          An <span className="Home-intro-strong">avid </span>
          <span className="Home-intro-highlight">Web</span> <span className="Home-intro-highlight"> Dev</span> learner
          looking for
          <span className="Home-intro-strong"> her role</span> in the web industry.
        </h2>
      </div>
      <div className="Home-sections">
        <section>
          <Link to="/about">About</Link>
        </section>
        <section>
          <Link to="/portfolio">Portfolio </Link>
        </section>
        <section>
          <Link to="/work">Work</Link>
        </section>
      </div>
    </div>
  );
}

export default Home;
