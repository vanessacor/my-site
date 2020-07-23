import React from "react";

import "./style.scss";

function Home() {
  return (
    <div className="home">
      <h2>
        An <span className="home-strong">avid </span>
        <span className="home-highlight">Web</span>{" "}
        <span className="home-highlight"> Dev</span> learner looking for
        <span className="home-strong"> her role</span> in the web industry.
      </h2>
    </div>
  );
}

export default Home;
