import * as utils from "./utils.mjs";
import thumbWar from "./thumb-war.mjs";

test("returns winner", () => {
  const originalWinner = utils.getWinner;

  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args);
    return args[1];
  };

  utils.getWinner.mock = { calls: [] };

  const winner = thumbWar("a", "b");
  expect(winner).toBe("b");
  expect(utils.getWinner.mock.calls).toHaveLength(2);
  utils.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(["a", "b"]);
  });

  utils.getWinner = originalWinner;
});
