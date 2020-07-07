import React, { Component } from "react";

import Experiment from "./Experiment";
import Data from "./../../../data/experiments.json";

class Portfolio extends Component {
  constructor() {
    super();
  }

  render() {
    const experiments = Data.map((item) => (
      <Experiment
        key={item.id}
        title={item.title}
        image={item.image}
        description={item.description}
        github={item.github}
        tags={item.tags}
      />
    ));
    return (
      <div className="portfolio">
        <h2 className="portfolio-title">Experiments</h2>
        <p className="portfolio-text">
          Put in in a deck for our standup today upstream selling, and get
          buy-in game-plan. Who's responsible for the ask for this request? that
          ipo will be a game-changer. Deploy to production win-win-win
          future-proof re-inventing the wheel, or i have a hard stop in an hour
          and half we're ahead of the curve on that one corporate synergy.
        </p>
        <div className="experiment">{experiments}</div>
      </div>
    );
  }
}

export default Portfolio;
