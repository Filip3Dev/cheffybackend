const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, Food } = require('./app/models');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({
  limit: '50mb', extended: true
}));
app.use(bodyParser.urlencoded({
  limit: '50mb', extended: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
