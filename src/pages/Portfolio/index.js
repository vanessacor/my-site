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
            Here you will find some of the projects I've been building while I'm
            learning to code.
          </p>
          <p>
            If you scroll from bottom to top you will follow my journey's
            timeline. The journey starts with very simple projects and as you
            scroll up the complexity increases as I aquire more skills and learn
            more tools.
          </p>
        </div>
        <div className="Portfolio-experiments">{experiments}</div>
        <ScrollUpBtn />
      </div>
    );
  }
}

export default Portfolio;
