import React, { useState } from 'react';
import { useRecoilValue } from "recoil"
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { clockAtom } from '../atom.js';
import './ClockTooltip.css';

export const ClockTooltip = ({ children }) => {
  const { hour, minute, second } = useRecoilValue(clockAtom);
  const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);

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
