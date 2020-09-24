import React from 'react';
import Star from './Star';
import Tree from './Tree';
import './App.css';

const App = () => {
  return (
  <div>
    <svg className="ground"></svg>
    <svg height="390" width="550" className="mountains">
      <polygon points="235 420,224 370,213 306,221 174,257 51,329 130,464 420" fill="#362B1C" />
      <polygon points="139 205,10 420,318 420,280 359,235 255,225 180,257 51" fill="#282015" />
    </svg>
    <svg height="80%" width="100%" className="bigstar">
      <circle cx="5" cy="5" r="5" fill="#F7F3E3" />
    </svg>
    <svg viewBox="0 0 100 100" height="80%" width="100%" className="stars">
      <Star cx={10} cy={20} r={0.2} />
      <Star cx={70} cy={40} r={0.1} />
      <Star cx={40} cy={10} r={0.3} />
      <Star cx={60} cy={30} r={0.1} />
      <Star cx={50} cy={20} r={0.1} />
      <Star cx={20} cy={10} r={0.2} />
      <Star cx={40} cy={30} r={0.1} />
      <Star cx={40} cy={70} r={0.3} />
      <Star cx={10} cy={30} r={0.1} />
      <Star cx={50} cy={10} r={0.1} />
      <Star cx={20} cy={30} r={0.2} />
      <Star cx={30} cy={20} r={0.2} />
      <Star cx={40} cy={10} r={0.2} />
    </svg>
    <svg height="120" width="650" className="cloud1">
      <polygon points="296 207,316 195,349 205,382 230,407 210,438 199,443 167,417 152,395 132,371 141,307 136,283 187" fill="#F7F3E3" />
    </svg>
    <svg height="100" width="100" className="moon">
      <circle cx="50" cy="50" r="50" fill="#F7F3E3" />
    </svg>
    <Tree cssClass="tree1" />
    <Tree cssClass="tree2" />
    <Tree cssClass="tree3" />
  </div>
  );
}

export default App;