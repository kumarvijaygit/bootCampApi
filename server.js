const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

//Route File
const bootcamps = require("./routes/bootcamp");

//Load Env Variables
dotenv.config({ path: "./config/config.env" });

//Connect to MongoDB
// connectDB().catch((err) => { //we can catch rejected promise here or checj below
//   console.log(err.message);
// });

connectDB();

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/vi/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

//Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  //Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
