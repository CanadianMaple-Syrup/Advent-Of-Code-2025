import { readFile } from 'node:fs/promises';

import lockRotations from './part1.js';
import lockRotations2 from './part2.js';

const data = await readFile("./input.txt", "utf-8")

console.log(lockRotations(data))
console.log(lockRotations2(data))
