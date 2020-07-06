import React from "react";

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
          Drive awareness to increase engagement bake it in, core competencies,
          for draft policy ppml proposal great plan! let me diarize this, and we
          can synchronise ourselves at a later timepoint beef up root-and-branch
          review.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-subtitle">Things I like</h2>
        <p className="about-text">
          Drive awareness to increase engagement bake it in, core competencies,
          for draft policy ppml proposal great plan! let me diarize this, and we
          can synchronise ourselves at a later timepoint beef up root-and-branch
          review.
        </p>
      </section>
    </div>
  );
}

export default About;
