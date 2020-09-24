import React from 'react';

const Tree = (props) => {
  const cssClass = props.cssClass;
  const num1 = props.num1 + Math.round(Math.random() * 2);
  const num2 = props.num2 + Math.round(Math.random() * 3);
  const num3 = props.num3 + Math.round(Math.random() * 3);
  const num4 = props.num4 + Math.round(Math.random() * 4);
  const num5 = props.num5 + Math.round(Math.random() * 3);
  const num6 = props.num6 + Math.round(Math.random() * 10);
  const num7 = props.num7 + Math.round(Math.random() * 7);
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      height='100'
      width='100' 
      className={cssClass}>
      <rect x="29" y="47" width="3" height="13" rx="1" fill="#1B150E"/>
      <path 
        d={`M30 50
          S36 46 ${num1} 40
          S40 36 ${num2} ${num3}
          C${num4} ${num5} 42 14 ${num6} 4
          C${num7} 18 26 24 26 30
          C26 36 24 40 30 50
          Z`} 
        fill='#56242B'/>
    </svg>
  );
};

export default Tree;