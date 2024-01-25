import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('username:');
let correctPassword = "secret"
let password = await rl.question("enter password")
rl.question('enter password: ')

if (password === correctPassword) {
    console.log(`Password is correct it is: ${correctPassword}`)
} else if (password != correctPassword) {
    console.log("wrong: ")
}

rl.close();