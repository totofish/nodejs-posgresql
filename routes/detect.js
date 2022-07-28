const express = require('express');
const log = require('../utils/debugHelper')(__filename);
const router = express.Router();

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  const userAgent = req.get('User-Agent')
  log('userAgent::', userAgent)
  log('headers::', req.headers)
  res.render('detect', {
    title: userAgent || 'Detect Page',
    body: userAgent || 'undefined',
  })
});

module.exports = router;
