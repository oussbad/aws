const express = require('express');
const router = express.Router();
const { getAllBooks, createBook } = require('../controllers/bookController');
const {authMiddleware}  = require('../middleware/authMiddleware');


router.get('/books',authMiddleware, getAllBooks);
router.post('/books',authMiddleware, createBook);

module.exports = router;
