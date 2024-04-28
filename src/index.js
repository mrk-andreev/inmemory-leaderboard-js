const Leaderboard = function () {
  this.map = new Map();
};

/**
 * Add score
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (score < 0) {
    throw new Error("Score must be non-negative");
  }

  if (this.map.has(playerId)) {
    const val = this.map.get(playerId);
    score = val + score;
  }

  this.map.set(playerId, score);
};

/**
 * Evaluate sum of top k scores
 * @param {number} k
 * @return {number}
 */
Leaderboard.prototype.sumTop = function (k) {
  if (k < 0) {
    throw new Error("K must be non-negative");
  }

  const arr = Array.from(this.map.values()).sort((a, b) => b - a);

  let sum = 0;
  let idx = 0;

  while (k-- && idx < arr.length) {
    sum += arr[idx++];
  }

  return sum;
};

/**
 * Reset score for player
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.map.delete(playerId);
};

module.exports = Leaderboard;
