const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasksRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

// Create server and connect to database
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    const url = process.env.DATABASE.replace(
      '<password>',
      process.env.DATABASE_PASSWORD
    );
    await connectDB(url);
    app.listen(
      port,
      console.log(`Server is listening on port: http://127.0.0.1:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
