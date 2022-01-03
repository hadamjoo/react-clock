import { WallClock } from './WallClock'
import { ClockTooltip } from './ClockTooltip'

function Clock() {
  return (
    <>
      Wall Clock
      <ClockTooltip>
        <WallClock />
      </ClockTooltip>
    </>
  );
}
export default Clock;
