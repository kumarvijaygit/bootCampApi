const express = require("express");
const dotenv = require("dotenv");

//Load Env Variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Express");
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello from Express</h1>"); //In postman click on preview to see the actual effect
// });

// app.get("/", (req, res) => {
//   res.send({ name: "Vijay" }); //here JS Object will be converted to json string and send
// }); //so in postman if you click on raw you may see the json string

// app.get("/", (req, res) => {
//   res.json({ name: "vijay", age: 26 }); //we can use res.json if we are sending json data
// });

// app.get("/", (req, res) => {
//   res.sendStatus(400);
// });

// app.get("/", (req, res) => {
//   res.status(400).json({ status: false });
// });

// app.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: { id: 1 } });
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
