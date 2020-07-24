import React from "react";

import "./style.scss";

function Job(props) {
  const { company, location, jobTitle, dates, description } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <div className="Job">
      <h3 className="Job-title">{jobTitle}</h3>
      <span>{company}</span>
      <p>{location}</p>
      <p className="Job-dates">{dates}</p>
      <div
        className="Job-description"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
    </div>
  );
}

export default Job;
