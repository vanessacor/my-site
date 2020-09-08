import React from "react";

import "./style.scss";

import Tag from "../Tag";

function Experiment(props) {
  const { title, link, image, description, github, tags, deploy } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <article className="Experiment">
      <h3 className="Experiment-title">{title}</h3>

      <a
        href={link}
        className="Experiment-screenshot"
        target="_blank"
        rel="noreferrer"
        alt={title}
      >
        <img src={image} alt={title}></img>
      </a>

      <div className="Experiment-links">
        <p>
          <a href={link} target="_blank" rel="noreferrer" alt="github repo">
            <i className="icon ion-md-cloud-upload"></i>
            Deployed on {deploy}
          </a>
        </p>
        <p>
          <a href={github} target="_blank" rel="noreferrer" alt="github repo">
            <i className="icon ion-logo-github"></i>
            View Code
          </a>
        </p>
      </div>

      <div
        className="Experiment-description"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      <ul className="Experiment-tags">
        {tags.map((item) => (
          <Tag key={item} tag={item} className={"Tag"} />
        ))}
      </ul>
    </article>
  );
}

export default Experiment;
