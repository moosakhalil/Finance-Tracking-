const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('../src/routes/auth');
const transactionsRouter = require('../src/routes/transactions');
const subscriptionsRouter = require('../src/routes/subscriptions');

// Serverless Express app for Vercel.
// Note: Static files are served by Vercel from the /public directory automatically.
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mount API routes WITHOUT the /api prefix because Vercel strips /api when routing to this function.
app.use('/auth', authRouter);
app.use('/transactions', transactionsRouter);
app.use('/subscriptions', subscriptionsRouter);

// Export a handler function compatible with Vercel Node serverless
module.exports = (req, res) => app(req, res);
