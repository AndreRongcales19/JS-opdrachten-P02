import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const correctPassword = "secret"
const password = await rl.question("enter password: ");

if (password === correctPassword) {
    console.log(`Password is correct it is: ${correctPassword}`)
} else if (password != correctPassword) {
    console.log("This password is wrong: ")
}

rl.close();


