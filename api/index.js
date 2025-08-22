const serverless = require('serverless-http');
const app = require('../server');

// Create the serverless handler once
const handler = serverless(app);

module.exports = (req, res) => handler(req, res);
