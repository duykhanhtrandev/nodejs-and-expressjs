const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App!');
});

app.use('/api/v1/tasks', tasksRoutes);

const port = 3000 || process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is listening on port: http://127.0.0.1:${port}`);
});
