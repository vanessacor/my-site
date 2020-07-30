import React, { Component } from "react";

import Experiment from "../../components/Experiment";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import Data from "../../../experiment2.json";

import "./style.scss";

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
        deploy={item.deploy}
      />
    ));
    return (
      <div className="Portfolio">
        <h2>Experiments</h2>
        <div className="Portfolio-text">
          <p>
            Here you will find all the projects I have done during my journey on
            how to code. Looking back at them I feel I want to redo all because
            I know I can do better now. But I decided not to change them because
            it tells my journey, it tells where I came from and how I got here.
            For every project I tried to do a retrospective of what I have
            learnt and what I would do differently.
          </p>
        </div>
        <div className="Portfolio-experiments">{experiments}</div>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default Portfolio;
