const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PORT = 3030 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/djon", (req, res) => {
  res.json({ result: "GET Vercel", status: "DJON success" });
});

app.post("/poly", (req, res) => {
  const body = req.body
  res.json({ result: "POST Vercel", status: "POLY success", body });
});

app.use((err, req, res, next) => {
  console.log("app.use  err", err);
  // const { status = 500, message = "Server error" } = err;
  res.status(500).json({ message: err.message });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server run on port ${PORT}`);
});

// npx nodemon server.js



