# InMemory Leaderboard JS

InMemory implementation of "1244. Design A Leaderboard" leetcode problem.

```
Design a Leaderboard class, which has 3 functions:
- addScore(playerId, score) - update the leaderboard by adding score to the given player's score. 
- sumTop(K) - return the score sum of the top K players
- reset(playerId) - reset score for player

Constaint:
* score > 0
```

```js
const Leaderboard = require('inmemory-leaderboard-js');

const service = new Leaderboard();

service.addScore(1, 42.0);
service.addScore(1, 42.0);
service.addScore(2, 42.0);
service.sumTop(5);
service.reset(1);
```

## Installation

Install the package with npm:

```bash
npm install inmemory-leaderboard-js
```

## Author

Mark Andreev, SWE @ Conundrum AI (https://www.linkedin.com/in/mrk-andreev/)
