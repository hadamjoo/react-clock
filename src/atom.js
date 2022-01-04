import { atom, selector } from "recoil";

export const clockAtom = atom({
  key: "clockAtom",
  default: {
    second: 0,
    minute: 0,
    hour: 0,
  },
});

export const dayToClockState = selector({
  key: "dayToClockState",
  get: ({ get }) => {
    const clockData = get(clockAtom);
    return clockData;
  },
  set: ({ set }) => {
    const currentDate = new Date();
    set(clockAtom, {
      second: currentDate.getSeconds(),
      minute: currentDate.getMinutes(),
      hour: currentDate.getHours(),
    });
  },
});
