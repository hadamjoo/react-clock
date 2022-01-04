import { RecoilRoot } from "recoil";
import { WallClock } from "./ClockComponents/WallClock";
import { ClockTooltip } from "./ClockComponents/ClockTooltip";

export default function Clock() {
  return (
    <RecoilRoot>
      Wall Clock
      <ClockTooltip>
        <WallClock />
      </ClockTooltip>
    </RecoilRoot>
  );
};
