const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const subscriptionsRouter = require('../../src/routes/subscriptions');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', subscriptionsRouter);

module.exports = (req, res) => app(req, res);
