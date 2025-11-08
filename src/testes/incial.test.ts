import { soma } from "../server";
import { describe, expect, test } from "vitest";

describe("Unit test AvailabilityEntity", () => {
  test("deveria retornar 5 para soma(2, 3)", () => {
    expect(soma(2, 3)).toBe(5);
  });
});
