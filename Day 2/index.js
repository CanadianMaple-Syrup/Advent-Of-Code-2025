import { readFile } from 'node:fs/promises';

import sumInvalidIDs from './part1.js';
import sumInvalidIDs2 from './part2.js';

let data;
try {
  data = await readFile("./input.txt", "utf-8");
  data = await readFile("./testInput.txt", "utf-8");

} catch (e) {
  data = await readFile("./Day\ 2/input.txt", "utf-8");

}

console.log(sumInvalidIDs(data));
console.log(sumInvalidIDs2(data));
// console.log(sumInvalidIDs("11-42,95-115,998-7012,1188511880-2188511890,222220-222224,1698522-1698528,446443-646449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2321212124"));
