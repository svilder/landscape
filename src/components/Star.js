import React from 'react';

const Star = (props) => {
  const cx = props.cx * Math.random() * 3
  const cy = props.cy * Math.random() * 3
  const r = parseFloat(props.r) * Math.random()
  return <circle cx={cx} cy={cy} r={r} fill="#F7F3E3" />;
};

export default Star;