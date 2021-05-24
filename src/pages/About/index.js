import React from 'react';

import ScrollUpBtn from '../../components/ScrollUpBtn';
import AboutListItem from '../../components/AboutListItem';

import './style.scss';

function About() {
  const profileHref = 'https://media-vanessapoppe-me.s3-eu-west-1.amazonaws.com/images/profile600.jpg';
  return (
    <div className="About">
      <img src={profileHref} alt="my profile" className="About-profile-img" />
      <section className="About-section">
        <h2>About Me</h2>
        <p>I was born in Portugal, lived in London and now I live in the beautiful city of Barcelona.</p>
        <p>
          I studied psychology, worked for more than 5 years in the Portuguese child protection system, then moved to
          London where I worked in Adoption services and school support.
        </p>
        <p>
          After moving to Barcelona with my family I decided to do a U turn in my career and started learning Web
          Development. I am a self-taught web-developer and I have learnt HMTL, CSS, Javascript, Node.js, Express, React
          and built along the way some fun projects.
        </p>
        <p>
          I just completed a FullStack Bootcamp from <a href="http://www.factoriaf5.org/">FactoriaF5</a> where I
          expanded my stack and learn how to apply agile methodologies and work with a team.
        </p>
        <p>
          I am currently looking to secure a challenging and rewarding new role within the web industry and continue to
          develop my skills further.
        </p>
      </section>
      <section className="About-section">
        <h2>Where did I learn from?</h2>
        <p>
          During my journey I stumble into amazing communities that made my all my learning easier and exciting. These
          communities were ready to support me with no questions asked. I am so grateful to all the people involved in:
        </p>

        <h4>Communities:</h4>
        <ul>
          <AboutListItem
            url="https://virtualcoffee.io/"
            name="Virtual Coffee"
            text="- an amazing Community that supports developers at all levels. I've learn so much just by talking to people, attending the events, listening to the podcasts. Virtual Coffee gave me this trully sense of being part of a community."
          />
          <AboutListItem
            url="https://codebar.io/barcelona"
            name="CodeBar Barcelona"
            text="- a community that provides a safe space for minority group members to learn programming."
          />
          <AboutListItem url="https://www.womenwhocode.com/" name="Women Who Code" text="" />
          <AboutListItem url="https://dev.to/" name="Dev Community" text="" />
        </ul>

        <h4>Online Courses:</h4>
        <ul>
          <AboutListItem url="https://www.theodinproject.com" name="Odin Project" text="" />
          <AboutListItem url="https://www.freecodecamp.org/" name="FreeCodeCamp" text="" />
          <AboutListItem url="https://scrimba.com/" name="Scrimba" text="" />
          <AboutListItem url="https://www.sololearn.com" name="SoloLearn" text="" />
        </ul>

        <h4>Online Tutorials:</h4>
        <ul>
          <AboutListItem url="https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA" name="Chris Courses" text="" />
          <AboutListItem url="https://javascript.info/" name="The Modern Javascript" text="" />
          <AboutListItem url="https://www.taniarascia.com/guides" name="Tania Rascia" text="" />
        </ul>

        <h4>Other Sources</h4>
        <ul>
          <AboutListItem url="https://developer.mozilla.org/en-US/docs/Web/JavaScript#Tutorials" name="MDN" text="" />
          <AboutListItem url="https://stackoverflow.com/" name="Stack Overflow" text="" />
          <AboutListItem url="https://css-tricks.com/" name="CSS Tricks" text="" />
        </ul>
      </section>
      <ScrollUpBtn />
    </div>
  );
}

export default About;
