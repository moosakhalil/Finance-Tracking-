const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('../../src/routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', authRouter);

module.exports = (req, res) => app(req, res);
