const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const transactionsRouter = require('../../src/routes/transactions');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', transactionsRouter);

module.exports = (req, res) => app(req, res);
