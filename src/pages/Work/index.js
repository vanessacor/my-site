import React, { Component } from "react";

import Data from "../../../data/jobs.json";

import "./style.scss";

import Job from "../../components/Job";
import Tag from "../../components/Tag";
import ScrollUpBtn from "../../components/ScrollUpBtn";

class Work extends Component {
  constructor() {
    super();
  }

  render() {
    const jobs = Data;
    const tags = [
      "HTML",
      "CSS",
      "JavaScript",
      "Git/GitHub",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
    ];

    return (
      <div className="Work">
        <ScrollUpBtn />
        <header className="Work-cv">
          <a
            target="_blank"
            href="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/VanessaPoppeCV.pdf"
            alt="download cv"
          >
            <i className="icon ion-md-print"></i>
            <span>Download CV</span>
          </a>
        </header>

        <section className="Work-skills">
          <h2>Skills</h2>
          <ul>
            {tags.map((item) => (
              <Tag key={item} tag={item} className={"Tag Tag-alt"} />
            ))}
          </ul>
          <p>
            To know more about me please visit <a href="/about">About Page.</a>
          </p>
          <p>
            And if you want please check the <a href="/portfolio">projects</a> I
            have been doing.
          </p>
        </section>

        <section className="Work-education">
          <h2>Education</h2>
          <h3>BA (Hons) Clinical Psychology</h3>
          <p>
            <a href="http://www.ispa.pt/">Instituto de Psicologia Aplicada </a>
          </p>
        </section>

        <section className="Work-xp">
          <h2>Experience</h2>
          <div className="jobList">
            {jobs.map((item) => (
              <Job
                key={item.id}
                company={item.company}
                location={item.location}
                jobTitle={item.jobTitle}
                dates={item.dates}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="Work-languages">
          <h2>Languages</h2>
          <ul>
            <li>
              <img
                src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/portugal-flag-icon-16.png"
                alt="portuguese flag"
              ></img>
              Portuguese - native
            </li>
            <li>
              <img
                src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/united-kingdom-flag-icon-16.png"
                british
                flag
              ></img>
              English - proficient
            </li>
            <li>
              <img
                src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/spain-flag-icon-16.png"
                spanish
                flag
              ></img>
              Spanish - moderate
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Work;
