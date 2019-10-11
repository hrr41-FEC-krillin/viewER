const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.get('/api/movie:id', (req, res) => {
  res.sendStatus(200);
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(Date());
  console.log(`Server is listening on port: ${PORT}`);
});
