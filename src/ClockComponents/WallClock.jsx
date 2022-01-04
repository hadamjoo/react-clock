import { useEffect } from "react";
import { useRecoilState } from "recoil"
import { dayToClockState } from '../atom.js';
import './WallClock.css';

export const WallClock = () => {
  const hourList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [date, setDate]  = useRecoilState(dayToClockState);

  useEffect(()=>{
    setInterval(()=>{
      setDate()
    }, 1000)
  }, [setDate])

  return (
    <div className="wallClock">
      {hourList.map(hour => (
        <div className={`number num${hour}`}>{hour}</div>
      ))}

      <div className="hour" style={{ transform: `translate(-50%) rotate(${date.minute * 0.5 + date.hour * 30}deg)` }}></div>
      <div className="minute" style={{ transform: `translate(-50%) rotate(${date.minute * 6}deg)` }}  ></div>
      <div className="second" style={{ transform: `translate(-50%) rotate(${date.second * 6}deg)` }}></div>
    </div>
  );
}

export default WallClock;