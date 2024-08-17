import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {

  const [activeLight, setActiveLight] = useState('red');


  useEffect(() => {
      let timer;

      switch(activeLight) {
        case 'red':
          timer = setTimeout(() => setActiveLight('green'), 7000);
          break;
        case 'yellow':
          timer = setTimeout(() => setActiveLight('red'),5000);
          break;
        case 'green':
          timer = setTimeout(() => setActiveLight('yellow'), 2000);
          break;
        default:
          break;
      }

      return () => clearTimeout(timer);
  },[activeLight])
  return (
    <div className='traffic-light'>
     <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
     <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
     <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
    </div>
  )
}

export default TrafficLight
