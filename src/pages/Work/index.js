import React from "react";

function Work() {
  return (
    <div className="work">
      <div className="work-cv">
        <a
          target="_blank"
          href="https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/VanessaPoppeCV.pdf"
          alt="download cv"
        >
          <i className="icon ion-md-print"></i>
          <span>Print CV</span>
        </a>
      </div>

      <section className="work-skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git/Github</li>
          <li>Sass</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        <p>
          sjdksjdkasj djaskdjaskldj daksjdaklsjdasjd fjshdfjdhfjsh ashdjahsj
          <a href="/about">about me</a> and{" "}
          <a href="/porfolio">projects I hdhdh</a>
        </p>
      </section>

      <section className="work-education">
        <h2>Education</h2>
        <h3>BA (Hons) Clinical Psychology</h3>
        <a href="http://www.ispa.pt/">Instituto de Psicologia Aplicada </a>
      </section>
      <section className="work-job">
        <h2>Experience</h2>
        <h3 className="work-job-title">Teaching Assistant</h3>
        <p className="work-job-dates">from February 2000 to March 2010</p>
        <p className="work-job-description">
          Put in in a deck for our standup today upstream selling, and get
          buy-in game-plan.
        </p>
        <h3 className="work-job-title">Adoption Support Worker</h3>
        <p className="work-job-dates">from February 2000 to March 2010</p>
        <p className="work-job-description">
          Put in a deck for our standup today upstream selling, and get buy-in
          game-plan.
        </p>
      </section>
      <section className="work-languages">
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
