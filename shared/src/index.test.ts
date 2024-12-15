import { isBlank } from "./index";
import { describe, expect, it } from "vitest";

describe("isBlank", () => {
  it("should return true if the string is empty", () => {
    expect(isBlank("")).toBe(true);
  });
});
