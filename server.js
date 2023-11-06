const database = require('./src/database/sqlite')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const Routes = require("./src/routes/index")
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;


app.use(Routes)
database();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log("server listening on port 3000");
});

