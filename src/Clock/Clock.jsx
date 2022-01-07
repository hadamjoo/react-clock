import { WallClock } from "./WallClock";
import { ClockTooltip } from "./ClockTooltip";

export const Clock = () => (
  <>
    Wall Clock
    <ClockTooltip>
      <WallClock />
    </ClockTooltip>
  </>
);
