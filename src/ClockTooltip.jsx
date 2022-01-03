import React, { useCallback, useEffect, useState } from 'react';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import './ClockTooltipText.css';

export const ClockTooltip = ({ children }) => {
  const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const updateTime = useCallback(() => {
    const currentDate = new Date();
    setSecond(currentDate.getSeconds());
    setMinute(currentDate.getMinutes());
    setHour(currentDate.getHours());
  }, []);

  useEffect(() => {
    setInterval(() => {
      updateTime();
    }, 1000);
  }, [updateTime]);

  return (
    <div className="clockTooltip" onMouseOver={() => setIsMouseTooltipVisible(true)} onMouseLeave={() => setIsMouseTooltipVisible(false)}>
      <MouseTooltip
        className="clockTooltipText"
        visible={isMouseTooltipVisible}
        offsetX={15}
        offsetY={10}
      >
        <div>{`${hour}시 ${minute}분 ${second}`}</div>
      </MouseTooltip>
      {children}
    </div>
  );
}

export default ClockTooltip;
