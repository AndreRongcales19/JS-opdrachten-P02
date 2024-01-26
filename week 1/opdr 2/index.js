import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const euro = await rl.question("How much dollars do you want to convert to Euro: ");
const dollar = euro * 1.09; 

console.log(`This is the amount of your money in dollars: ${dollar}`);

rl.close();