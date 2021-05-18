import React from 'react';

import './style.scss';

function Job(props) {
  const { company, location, jobTitle, dates, description } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <div className="Job">
      <h3 className="Job-title">
        {company} ({location})<span> - {jobTitle}</span>
      </h3>

      <p className="Job-dates">{dates}</p>
      <div className="Job-description" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default Job;
