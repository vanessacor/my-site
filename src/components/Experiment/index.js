import React from "react";

function Experiment(props) {
  const { title, link, image, description, github, tags } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <article className="experiment-article">
      <h3 className="experiment-article-title">
        <a href={link} target="_blank" alt={title}>
          {title}
        </a>
      </h3>

      <a href={link} target="_blank" alt={title}>
        <img
          className="experiment-article-screenshot"
          src={image}
          alt={title}
        ></img>
      </a>
      <p className="experiment-links">
        <a href={github} target="_blank" alt="github repo">
          <i className="icon ion-logo-github"></i>
          Source Code
        </a>
      </p>

      <div
        className="experiment-article-description"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      <ul className="experiment-article-tags">
        {tags.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Experiment;
