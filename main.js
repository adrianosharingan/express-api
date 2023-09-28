import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    res.json('pong');
});

app.listen(3000, () => console.log('listening on port 3000'))
