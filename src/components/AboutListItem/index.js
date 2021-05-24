import React from 'react';

function AboutListItem(props) {
  const { url, name, text } = props;

  return (
    <li>
      <p>
        <a href={url}>{name}</a> {text}
      </p>
    </li>
  );
}

export default AboutListItem;
