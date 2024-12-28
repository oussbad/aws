const express = require('express');
const router = express.Router();
const { createLoan } = require('../controllers/loanController');
const {authMiddleware}  = require('../middleware/authMiddleware');


router.post('/loans',authMiddleware, createLoan);

module.exports = router;
