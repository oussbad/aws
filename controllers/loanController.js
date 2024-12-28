const Loan = require('../models/loan');
const Book = require('../models/book');
const User = require('../models/user');

const createLoan = async (req, res) => {
  const { userId, bookId, startDate, endDate } = req.body;
  try {
    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);
    if (!user || !book) return res.status(400).json({ message: 'Invalid user or book' });

    const loansCount = await Loan.count({ where: { userId } });
    if (loansCount >= 2) return res.status(400).json({ message: 'User can borrow only 2 books' });

    const loan = await Loan.create({ userId, bookId, startDate, endDate });
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating loan', error });
  }
};

module.exports = { createLoan };
