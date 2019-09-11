const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal')

router.post('/add-task', (req, res, next) => {
  const { query } = req;
  const { id } = query;
  console.log('user id in back: ', id);

});

module.exports = router;