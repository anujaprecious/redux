import React from 'react';
import { useTime } from 'react-timer-hook';

function MyTime() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{fontSize: '30px',color:'white',marginLeft:'670px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
      </div>
    </div>
  );
}
export default MyTime;