const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('../src/routes/auth');
const transactionsRouter = require('../src/routes/transactions');
const subscriptionsRouter = require('../src/routes/subscriptions');

// Catch-all serverless function to handle any /api/* path on Vercel
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Vercel strips the initial /api segment before invoking this function
// Support both with and without '/api' prefix to be safe across platforms
app.use('/auth', authRouter);
app.use('/transactions', transactionsRouter);
app.use('/subscriptions', subscriptionsRouter);
app.use('/api/auth', authRouter);
app.use('/api/transactions', transactionsRouter);
app.use('/api/subscriptions', subscriptionsRouter);

// Simple health check
app.get(['/health', '/api/health'], (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

module.exports = (req, res) => app(req, res);
