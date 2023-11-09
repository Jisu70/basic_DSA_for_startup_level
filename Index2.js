const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql', // or your preferred database
});

const Review = sequelize.define('Review', {
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviewTags: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Assuming you want to store tags as an array of strings
  },
  // Add other fields like reviewRating, companyId, customerId, and reviewStatus
});

// Create the table if it doesn't exist
sequelize.sync();
