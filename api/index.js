const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const clear = require('clear');
const chalk = require('chalk');
const port = 4000;

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.listen(port, () => {    
    clear();
    console.log(chalk.yellow(`API running on port ${port}`));
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require('./routes')(app);