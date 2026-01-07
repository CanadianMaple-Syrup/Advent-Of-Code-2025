import { readFile } from 'node:fs/promises';

import sumJoltages from './part1.js';
// import sumJoltages2 from './part2.js';

let data;
try {
  data = await readFile("./input.txt", "utf-8");
  // data = await readFile("./testInput.txt", "utf-8");

} catch (e) {
  data = await readFile("./Day\ 3/input.txt", "utf-8");
  data = await readFile("./Day\ 3/testInput.txt", "utf-8");
}

console.log(sumJoltages(data));
