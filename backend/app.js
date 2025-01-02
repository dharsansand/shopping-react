const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors());  // Enable Cross-Origin Requests

// MongoDB connection function with async/await
const connectDatabase = async () => {
  try {
    const uri = process.env.DB_URL;
    if (!uri) {
      throw new Error('MongoDB URI is not defined in environment variables.');
    }

    // Establish the connection using mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Import routes
const product = require('./routes/product');
const order = require('./routes/order');

// Connect to the database and start the server only if the connection is successful
const startServer = async () => {
  await connectDatabase();  // Wait for DB connection before starting the server

  const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
  const NODE_ENV = process.env.NODE_ENV || 'development'; // Default to 'development' if NODE_ENV is not defined

  // Start the server after successful DB connection
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  });
};

// API Routes
app.use('/api/products', product);
app.use('/api/orders', order);

// Start the server
startServer();
