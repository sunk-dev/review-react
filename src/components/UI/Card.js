import React from 'react';
import './Card.css';
// props.children 이므로 디스트럭쳐링 때 무조건 children으로

const Card = ({ children, className }) => {
  const madeClass = 'card ' + className;
  return <div className={madeClass}>{children}</div>;
};

export default Card;
