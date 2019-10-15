const express = require('express');
const app = require('./app.js');

const PORT = 5050;

app.listen(PORT, () => {
  console.log(Date());
  console.log(`Server is listening on port: ${PORT}`);
});
