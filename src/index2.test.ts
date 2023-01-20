import { double } from "./index";

describe("index", () => {
  it("double double works", () => {
    expect(double(double(1))).toBe(4);
  });
});
