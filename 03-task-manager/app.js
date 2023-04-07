const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App!');
});

app.use('/api/v1/tasks', tasksRoutes);

const port = 3000 || process.env.PORT;

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
