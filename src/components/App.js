import React from 'react';
import './App.css';

const App = () => {
  return (
  <div>
    <svg className="ground"></svg>
    <svg height="390" width="550" className="mountains">
      <polygon points="235 420,224 370,213 306,221 174,257 51,329 130,464 420" fill="#362B1C" />
      <polygon points="139 205,10 420,318 420,280 359,235 255,225 180,257 51" fill="#282015" />
    </svg>
    <svg height="120" width="650" className="cloud1">
      <polygon points="296 207,316 195,349 205,382 230,407 210,438 199,443 167,417 152,395 132,371 141,307 136,283 187" fill="#F7F3E3" />
    </svg>
    <svg height="100" width="100" className="moon">
      <circle cx="50" cy="50" r="50" fill="#F7F3E3" />
    </svg>
  </div>
  );
}

export default App;