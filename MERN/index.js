const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/products", productRoutes);

mongoose
  .connect(
    "mongodb+srv://shyamabhishek115:BPoDQmyhV72YYxw4@cluster0.kpvta5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(() => {
    console.log("connection failed!");
  });
