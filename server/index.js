const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.get('/api/movie:id', (req, res) => {
  var id = req.params.id.slice(1);
  console.log(id);
  db.getCasts(id, (casts) => {
    res.send(casts);
  })

});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(Date());
  console.log(`Server is listening on port: ${PORT}`);
});
