import React from 'react'
// props.children: 부모컴포넌트 사이에 있는 자식컴포넌트를 가져옴.
const Hello = (props) => {
  console.log('hello Component');
  console.log(props);
  return (
    <div>
      {props.children}
      Hello React
      </div>
  )
};

export default Hello