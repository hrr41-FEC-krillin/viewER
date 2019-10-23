require('dotenv').config();

const Console = console;
const app = require('./app.js');

const port = process.env.PORT;

app.listen(port, () => {
  Console.log(Date());
  Console.log(`Server is listening on port: ${port}`);
});
