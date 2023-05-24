const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/pictures', express.static('pictures'));

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});
  
app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
});

app.get('/books.js', (req, res) => {
    res.sendFile(__dirname + '/books.js');
});

app.get('/review.js', (req, res) => {
    res.sendFile(__dirname + '/review.js');
});

app.get('/404.js', (req, res) => {
    res.sendFile(__dirname + '/404.js');
});

app.get('^/$|/index.html', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/books.html', function (req, res) {
    res.sendFile('books.html', {root: __dirname});
});

app.get('/review.html', function (req, res) {
    res.sendFile('review.html', {root: __dirname});
});

app.use((req, res, next) => {
    res.status(404).sendFile('404.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });