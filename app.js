const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("running node-api");
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`API is running on port ${port}`));
