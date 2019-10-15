const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('/api/movie', (req, res) => {
  var id = req.query.id;
  db.getCasts(id, (casts) => {
    casts.sort((a, b) => {
      return a.role - b.role;
    });
    res.send(casts);
  });
});


module.exports = app;
