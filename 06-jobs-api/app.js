require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// connectDB
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoutes");
const jobsRouter = require("./routes/jobsRoutes");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    const url = process.env.DATABASE.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    );
    await connectDB(url);
    app.listen(port, () =>
      console.log(`Server is listening on port: http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
