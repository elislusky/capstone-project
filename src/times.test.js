import { initializeTimes, updateTimes } from "./times";

test("initializeTimes returns the expected times", () => {
  const result = initializeTimes();

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
test("updateTimes returns the same state", () => {
  const state = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const result = updateTimes(state, {});

  expect(result).toEqual(state);
});