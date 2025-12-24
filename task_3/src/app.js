const express = require("express");
const morgan = require("morgan");
const bookRoutes = require("./routes/bookRoutes");

const app = express();


app.use(express.json());


app.use("/books", bookRoutes);

module.exports = app;
