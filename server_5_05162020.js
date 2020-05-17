const express = require("express");
const dotenv = require("dotenv");

//Route File
const bootcamps = require("./routes/bootcamp");

//Load Env Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

app.use(logger);

app.use("/api/vi/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
