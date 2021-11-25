import * as utils from "./utils.mjs";
import thumbWar from "./thumb-war.mjs";

test("returns winner", () => {
  const originalWinner = utils.getWinner;

  utils.getWinner = (p1, p1) => p2;

  const winner = thumbWar("a", "b");
  expect(winner).toBe("b");

  utils.getWinner = originalWinner;
});
