import React from "react";

import "./style.scss";

import Tag from "../Tag";

function Project(props) {
  const { title, link, image, description, github, tags, deploy } = props;
  function createMarkup() {
    return { __html: `${description}` };
  }

  return (
    <article className="Project">
      <h3 className="Project-title">{title}</h3>

      <a
        href={link}
        className="Project-screenshot"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image}
          alt={title}
          alt={`a screen shot of ${title} page`}
        ></img>
      </a>

      <div className="Project-links">
        <p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            alt={`link to ${title} live site`}
          >
            <i className="icon ion-md-cloud-upload"></i>
            Deployed on {deploy}
          </a>
        </p>
        <p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            alt={`link to ${title} github repo`}
          >
            <i className="icon ion-logo-github"></i>
            View Code
          </a>
        </p>
      </div>

      <div
        className="Project-description"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      <ul className="Project-tags">
        {tags.map((item) => (
          <Tag key={item} tag={item} className={"Tag"} />
        ))}
      </ul>
    </article>
  );
}

export default Project;
