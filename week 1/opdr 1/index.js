import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const username = await rl.question("What is your username: ");

console.log(`Hello ${username}, welcome back!`);

rl.close();