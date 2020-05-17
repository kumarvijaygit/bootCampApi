const express = require("express");
const dotenv = require("dotenv");

//Load Env Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/vi/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamp" });
});

app.get("/api/vi/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
});

app.post("/api/vi/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Created new bootcamp" });
});

app.put("/api/vi/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

app.delete("/api/vi/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
