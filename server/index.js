const express = require('express');
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const router = require('./router');

const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`site: http://127.0.0.1:${port}`));

