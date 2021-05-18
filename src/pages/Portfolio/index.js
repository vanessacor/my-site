import React from 'react';

import Project from '../../components/Project';
import ScrollUpBtn from '../../components/ScrollUpBtn';
import Data from '../../../data/experiments.json';

import './style.scss';

function Portfolio() {
  const projects = Data.map((item) => (
    <Project
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
      <h2>Projects</h2>
      <div className="Portfolio-text">
        <p>Here you will find some of the projects I&apos;ve been building while I&apos;m learning to code.</p>
        <p>
          If you scroll from bottom to top you will follow my journey&apos;s timeline. The journey starts with very
          simple projects and as you scroll up the complexity increases as I aquire more skills and learn more tools.
        </p>
      </div>
      <div className="Portfolio-projects">{projects}</div>
      <ScrollUpBtn />
    </div>
  );
}

export default Portfolio;
