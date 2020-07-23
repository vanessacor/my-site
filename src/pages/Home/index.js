import React from "react";

import "./style.scss";

function Home() {
  return (
    <div className="Home">
      <h2>
        An <span className="Home-strong">avid </span>
        <span className="Home-highlight">Web</span>{" "}
        <span className="Home-highlight"> Dev</span> learner looking for
        <span className="Home-strong"> her role</span> in the web industry.
      </h2>
    </div>
  );
}

export default Home;
