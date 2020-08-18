import React from "react";

import "./style.scss";

function About() {
  const profileHref =
    "https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/profile600.jpg";
  return (
    <div className="About">
      <img
        src={profileHref}
        alt="my profile"
        className="About-profile-img"
      ></img>
      <section className="About-section">
        <h2>About Me</h2>
        <p>
          I was born in Portugal, lived in London and now I live in the
          beautiful city of Barcelona.
        </p>
        <p>
          I studied psychology, worked for more than 5 years in the Portuguese
          child protection system, then moved to London where I worked in
          Adoption services and school support.
        </p>
        <p>
          After moving to Barcelona with my family I decided to do a U turn in
          my career and started learning Web Development. I am a self-taught
          web-developer and I have learnt HMTL, CSS, Javascript, Node.js,
          Express, React and built along the way some fun projects.
        </p>
        <p>
          I am currently looking to secure a challenging and rewarding new role
          within the web industry and continue to develop my skills further.
        </p>
      </section>
      <section className="About-section">
        <h2>Where did I learn from?</h2>
        <p>
          During my journey I stumble into amazing communities that made my
          journey possible. These communities are ready to support you with no
          questions asked. I am so grateful to all the people involved in:
        </p>

        <h4>Communities:</h4>
        <ul>
          <li>
            <a href="https://codebar.io/barcelona">CodeBar Barcelona</a>
          </li>
          <li>
            <a href="https://meetingplace.io/virtual-coffee">Virtual Coffee </a>
          </li>
          <li>
            <a href="https://www.womenwhocode.com/">Woman Who Code</a>
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
        </ul>
        <h4>Other Sources</h4>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials">
              MDN
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/">Stack Overflow</a>
          </li>
          <li>
            <a href="https://css-tricks.com/">CSS Tricks</a>
          </li>
          <li>
            <a href="https://www.codewars.com/">Code Wars</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
