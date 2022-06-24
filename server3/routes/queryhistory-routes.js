const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryHistory-controller');

router.post('/', queryController.saveQueryHistory);
router.get('/', queryController.getQueryHistory);

module.exports = router;
