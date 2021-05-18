import React from 'react';

import './style.scss';

function Tag(props) {
  const { tag, className } = props;

  return <li className={className}>{tag}</li>;
}

export default Tag;
