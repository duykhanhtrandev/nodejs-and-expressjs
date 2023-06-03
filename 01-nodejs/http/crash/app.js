const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send(req.header("User-Agent"));
  res.send(req.rawHeaders);
});

app.post("/contact", (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).send("Name is required");
  }

  // DATABASE STUFF
  res.status(200).send(`Hello ${firstName} ${lastName}!`);
});

app.post("/login", (req, res) => {
  if (!req.header("x-auth-token")) {
    return res.status(400).send("No token");
  }

  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not authorized");
  }

  res.send("Logged in");
});

app.put("/post/:id", (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;

  res.json({
    id,
    title,
  });
});

app.delete("/post/:id", (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;

  res.json({ msg: `Post ${id} deleted` });
});

const port = 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Application is listening on port: http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
