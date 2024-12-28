const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DB_SSL === 'true' ? {
      require: true, // Enforce SSL
      rejectUnauthorized: false, // Allow self-signed certificates (RDS often uses it)
    } : false,
  },
  logging: false, // Disable SQL query logging
  retry: {
    match: [/ECONNREFUSED/, /ETIMEDOUT/, /ECONNRESET/], // Retry on these errors
    max: 5, // Maximum number of retries
  },
});

// Authenticate and connect to the database
sequelize
  .authenticate()
  .then(() => console.log('Connected to the RDS PostgreSQL instance successfully.'))
  .catch((err) => console.error('Failed to connect to the RDS PostgreSQL instance:', err));

// Export the Sequelize instance
module.exports = sequelize;
