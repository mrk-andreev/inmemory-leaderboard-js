const Leaderboard = require("inmemory-leaderboard-js");

test('Should complete e2e test', () => {
    const leaderboard = new Leaderboard();
    leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
    leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
    leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
    leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
    leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
    expect(leaderboard.sumTop(1)).toBe(73); // returns 73;
    leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
    leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
    leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
    expect(leaderboard.sumTop(3)).toBe(141);           // returns 141 = 51 + 51 + 39;
});

test('Should throw exception on negative score', () => {
    const leaderboard = new Leaderboard();

    expect(() => leaderboard.addScore(1, -1)).toThrow(/Score must be non-negative/);
});

test('Should return zero if sumTop zero', () => {
    const leaderboard = new Leaderboard();

    expect(leaderboard.sumTop(0)).toBe(0);
});


test('Should throw exception on negative k for sumTop', () => {
    const leaderboard = new Leaderboard();

    expect(() => leaderboard.sumTop(-5)).toThrow(/K must be non-negative/);
});

