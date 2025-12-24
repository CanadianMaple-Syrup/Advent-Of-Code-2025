import { readFile } from 'node:fs/promises';

import sumInvalidIDs from './part1.js';
import sumInvalidIDs2 from './part2.js';

let data;
try {
  data = await readFile("./input.txt", "utf-8");
  // data = await readFile("./testInput.txt", "utf-8");

} catch (e) {
  data = await readFile("./Day\ 2/input.txt", "utf-8");

}

console.log(sumInvalidIDs(data));
console.log(sumInvalidIDs2(data));
