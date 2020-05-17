const express = require("express");
const dotenv = require("dotenv");

//Route File
const bootcamps = require("./routes/bootcamp");

//Load Env Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/vi/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
