import React from "react";

import "./style.scss";

import Tag from "../Tag";

function Experiment(props) {
  const { title, link, image, description, github, tags } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <article className="Experiment">
      <h3 className="Experiment-title">
        <a href={link} target="_blank" alt={title}>
          {title}
        </a>
      </h3>

      <a
        href={link}
        className="Experiment-screenshot"
        target="_blank"
        alt={title}
      >
        <img src={image} alt={title}></img>
      </a>
      <p className="Experiment-links">
        <a href={github} target="_blank" alt="github repo">
          <i className="icon ion-logo-github"></i>
          Source Code
        </a>
      </p>

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
