import React from "react";

import ScrollUpBtn from "../../components/ScrollUpBtn";

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
          I just completed a FullStack Bootcamp from{" "}
          <a href="http://www.factoriaf5.org/">FactoriaF5</a> where I expanded
          my stack and learn how to apply agile methodologies and work with a
          team.
        </p>
        <p>
          I am currently looking to secure a challenging and rewarding new role
          within the web industry and continue to develop my skills further.
        </p>
      </section>
      <section className="About-section">
        <h2>Where did I learn from?</h2>
        <p>
          During my journey I stumble into amazing communities that made my all
          my learning easier and exciting. These communities were ready to
          support me with no questions asked. I am so grateful to all the people
          involved in:
        </p>

        <h4>Communities:</h4>
        <ul>
          <li>
            <p>
              <a href="https://virtualcoffee.io/">Virtual Coffee</a> - an
              amazing Community that supports developers at all levels. I've
              learn so much just by talking to people, attending the events,
              listening to the podcasts. Virtual Coffee gave me this trully
              sense of being part of a community.
            </p>
          </li>
          <li>
            <p>
              <a href="https://codebar.io/barcelona">CodeBar Barcelona</a> - a
              community that provides a safe space for minority group members to
              learn programming.
            </p>
          </li>
          <li>
            <p>
              <a href="https://www.womenwhocode.com/">Women Who Code</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://dev.to/">Dev Community</a>
            </p>
          </li>
        </ul>

        <h4>Online Courses:</h4>
        <ul>
          <li>
            <p>
              <a href="https://www.theodinproject.com">Odin Project</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://scrimba.com/">Scrimba</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://www.sololearn.com">SoloLearn</a>
            </p>
          </li>
        </ul>

        <h4>Online Tutorials:</h4>
        <ul>
          <li>
            <p>
              <a href="https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA">
                Chris Courses
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://javascript.info/">The Modern Javascript</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://www.taniarascia.com/guides">Tania Rascia</a>
            </p>
          </li>
        </ul>
        <h4>Other Sources</h4>
        <ul>
          <li>
            <p>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials">
                MDN
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://stackoverflow.com/">Stack Overflow</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://css-tricks.com/">CSS Tricks</a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://www.codewars.com/">Code Wars</a>
            </p>
          </li>
        </ul>
      </section>
      <ScrollUpBtn />
    </div>
  );
}

export default About;
