import { getWinner } from "./utils.mjs";

function thumbWar(p1, p2) {
  const numberToWin = 2;
  let player1Wins = 0;
  let player2Wins = 0;

  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = getWinner(p1, p2);

    if (winner === p1) {
      player1Wins++;
    } else if (winner === p2) {
      player2Wins++;
    }
  }

  return player1Wins > player2Wins ? p1 : p2;
}

export default thumbWar;
