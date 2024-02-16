import express from 'express';
const app = express();
const port = 3000;

let counter = 0;

app.get('/counter', (request, response) => {
    let increment = 10
    if (request.query.incrementby) {
        increment = Number( request.query.incrementby);       
    }
    counter = counter + increment;
    response.send('Totaal '+counter);
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});