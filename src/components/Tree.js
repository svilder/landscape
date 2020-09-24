import React from 'react';

const Tree = (props) => {
  const cssClass = props.cssClass;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      height='100'
      width='100' 
      className={cssClass}>
      <rect x="29" y="47" width="3" height="13" rx="1" fill="#1B150E"/>
      <path 
        d='M30 50 
          S36 46 36 40 
          S40 36 36 28 
          C32 20 42 14 28 4 
          C18 18 26 24 26 30 
          C26 36 24 40 30 50 
          Z' 
        fill='#56242B'/>
    </svg>
  );
};

export default Tree;