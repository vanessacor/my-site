import React from "react";

import "./style.scss";

function About() {
  const profileHref =
    "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/profile600.jpg";
  return (
    <div className="about">
      <img
        src={profileHref}
        alt="my profile"
        className="about-profile-img"
      ></img>
      <section className="about-section">
        <h2 className="about-subtitle">About Me</h2>
        <p className="about-text">
          I was born in Portugal, lived in London and now I live in the
          beautiful city of Barcelona.
          <br />I studied psychology, worked for more than 5 years in the
          Portuguese child protection system, then moved to London where I
          worked in Adoption services and school support.
          <br />
          After moving to Barcelona with my family I decided to do a U turn in
          my career and started learning Web Development. I am a self-taught
          web-developer and I have learnt HMTL, CSS, Javascript, Node.js,
          Express, React and built along the way some fun projects.
          <br />I am currently looking to secure a challenging and rewarding new
          role within the web industry and continue to develop my skills
          further.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-subtitle">Where did I learnt</h2>
        <p className="about-text">
          My journey wouldn’t have been possible without the incredible
          communities that are out there ready to support you with no questions
          asked. I immensely thankful to all the the people involved in:
        </p>

        <h4>Communities:</h4>
        <ul>
          <li>
            <a href="https://codebar.io/barcelona">CodeBar Barcelona</a>
          </li>
          <li>
            <a href="https://www.womenwhocode.com/">Woman Who Code</a>
          </li>
          <li>
            <a href="https://meetingplace.io/virtual-coffee">Virtual Coffee </a>
          </li>
          <li>
            <a href="https://dev.to/">Dev Community</a>
          </li>
        </ul>

        <h4>Online Courses:</h4>
        <ul>
          <li>
            <a href="https://www.theodinproject.com">Odin Project</a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
          </li>
          <li>
            <a href="https://scrimba.com/">Scrimba</a>
          </li>
          <li>
            <a href="https://www.sololearn.com">SoloLearn</a>
          </li>
        </ul>

        <h4>Online Tutorials:</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA">
              Chris Courses
            </a>
          </li>
          <li>
            <a href="https://javascript.info/">The Modern Javascript</a>
          </li>
          <li>
            <a href="https://www.taniarascia.com/guides">Tania Rascia</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials">
              MDN
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
