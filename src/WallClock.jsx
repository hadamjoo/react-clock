import React, { useCallback, useEffect, useState } from 'react';
import './WallClock.css';

export const WallClock = () => {
  const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  const setClock = useCallback(() => {
    const currentDate = new Date();
    setSecondRatio(currentDate.getSeconds() * 6);
    setMinuteRatio(currentDate.getMinutes() * 6);
    setHourRatio(currentDate.getMinutes() * 0.5 + currentDate.getHours() * 30);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
  }, [setClock]);

  return (
    <div className="wallClock">
      {hourList.map(hour => (
        <div className={`number num${hour}`}>{hour}</div>
      ))}

      <div className="hour" style={{ transform: `translate(-50%) rotate(${hourRatio}deg)` }}></div>
      <div className="minute" style={{ transform: `translate(-50%) rotate(${minuteRatio}deg)` }}  ></div>
      <div className="second" style={{ transform: `translate(-50%) rotate(${secondRatio}deg)` }}></div>
    </div>
  );
}

export default WallClock;