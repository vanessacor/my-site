import React from "react";

function Experiment(props) {
  const { title, image, description, github, tags } = props;
  return (
    <article className="experiment-article">
      <h3 className="experiment-article-title">
        {title}
        <a href={github} target="_blank" alt="github repo">
          <i className="icon ion-logo-github"></i>
        </a>
      </h3>
      <img
        className="experiment-article-screenshot"
        src={image}
        alt={title}
      ></img>

      <p className="experiment-article-description">{description}</p>
      <ul className="experiment-article-tags">
        {tags.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Experiment;
