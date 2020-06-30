import React from "react";

function Experiment(props) {
  const { title, image, description, tags } = props;
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} alt={title}></img>
      <p>{description}</p>
      <ul>
        {tags.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default Experiment;
