import { getRuntime } from "../utils/getRuntime";

describe("Test getRuntime method", () => {
  it("runtime is 100", () => {
    expect(getRuntime(100)).toEqual("1h 40m");
  });

  it("runtime is 0", () => {
    expect(getRuntime(0)).toEqual("0h 0m");
  });

  it("runtime is 125", () => {
    expect(getRuntime(125)).toEqual("2h 5m");
  });
});
