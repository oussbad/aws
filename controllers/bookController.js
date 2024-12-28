const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

const createBook = async (req, res) => {
  const { title, author, edition } = req.body;
  try {
    const book = await Book.create({ title, author, edition });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

module.exports = { getAllBooks, createBook };
