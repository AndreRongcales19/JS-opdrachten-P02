import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const number = 10; 
let guess = await rl.question("Guess the number: ");

while (guess !== 10) {
    if (guess == 10) {
        console.log(`Thank you for your valuable feedback: ${guess}`); 
        break;   
    }
    guess = await rl.question("Guess the number: ");
}



rl.close();