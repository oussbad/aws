const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edition: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Book;
