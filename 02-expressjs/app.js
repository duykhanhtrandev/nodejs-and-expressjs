const express = require('express');
const app = express();

const peopleRouter = require('./routes/peopleRoutes');
const authRouter = require('./routes/authRoutes');

// static assets
app.use(express.static('./methods-public'));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/people', peopleRouter);
app.use('/login', authRouter);

app.listen(5000, () => {
  console.log(`Server is listening on port: http://localhost:5000`);
});
