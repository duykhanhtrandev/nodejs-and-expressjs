require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const mainRouter = require("./routes/mainRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Router
app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port: http://127.0.0.1:3000`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();