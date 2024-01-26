import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const width = await rl.question("What is the width: ");
const height = await rl.question("What is the height: ");
const calculation = width * height;

console.log(`Thank you for your valuable feedback: ${calculation}`);

rl.close();