import { initializeTimes, updateTimes } from "./times";

test("initializeTimes returns times from the API", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns times from the API", () => {
  const result = updateTimes([], "2026-09-30");

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});