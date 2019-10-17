require('dotenv').config();
const express = require('express');
const app = require('./app.js');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(Date());
  console.log(`Server is listening on port: ${port}`);
});
