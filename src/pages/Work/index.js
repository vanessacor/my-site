import React from "react";

import "./style.scss";

import Tag from "../../components/Tag";

function Work() {
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
      <header className="Work-cv">
        <a
          target="_blank"
          href="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/VanessaPoppeCV.pdf"
          alt="download cv"
        >
          <i className="icon ion-md-print"></i>
          <span>Print CV</span>
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
        <h3 className="Work-xp-title">Teaching Assistant</h3>
        <p className="Work-xp-dates">from February 2000 to March 2010</p>
        <p className="Work-xp-description">
          Put in in a deck for our standup today upstream selling, and get
          buy-in game-plan.
        </p>
        <h3 className="Work-xp-title">Adoption Support Worker</h3>
        <p className="Work-xp-dates">from February 2000 to March 2010</p>
        <p className="Work-xp-description">
          Put in a deck for our standup today upstream selling, and get buy-in
          game-plan.
        </p>
      </section>

      <section className="Work-languages">
        <h2>Languages</h2>
        <ul>
          <li>
            <img src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/portugal-flag-icon-16.png"></img>
            Portuguese - native
          </li>
          <li>
            <img src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/united-kingdom-flag-icon-16.png"></img>
            English - proficient
          </li>
          <li>
            <img src="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/spain-flag-icon-16.png"></img>
            Spanish - moderate
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Work;
