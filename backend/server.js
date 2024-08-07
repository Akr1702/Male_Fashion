const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000 || 6000;
const app = express();

connectDB();

app.use("/", rootroute);
app.use("/products", productroute);

// server create
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.green);
});