import React, { Component } from "react";

import Experiment from "./Experiment";
import Data from "./../../../experiment2.json";

class Portfolio extends Component {
  constructor() {
    super();
  }

  render() {
    const experiments = Data.map((item) => (
      <Experiment
        key={item.id}
        title={item.title}
        link={item.link}
        image={item.image}
        description={item.description}
        github={item.gitHubLink}
        tags={item.tags}
      />
    ));
    return (
      <div className="portfolio">
        <h2 className="portfolio-title">Experiments</h2>
        <p className="portfolio-text">
          Here you will find all the projects I have done during my journey on
          how to code. Looking at all them it’s like looking back and I feel
          that I want to redo all because I know I can do better now. But I
          decided not to change them because it tells my journey, it tells where
          I came from and how I got here. For every project I tried to do a
          retrospective and see what I have learnt in each one and what If I had
          to do it again what I would do differently.
        </p>
        <div className="experiment">{experiments}</div>
      </div>
    );
  }
}

export default Portfolio;
