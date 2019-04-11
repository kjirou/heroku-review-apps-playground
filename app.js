const bodyParser = require('body-parser');
const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get('/hello', function (req, res) {
  res.send('"/hello" page');
});

app.get('/', function (req, res) {
  res.send('"/" page xxxxxx');
});

app.listen(port);
