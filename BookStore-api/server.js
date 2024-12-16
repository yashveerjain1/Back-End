require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT || 4000;

// connect to the database
connectDB();

// middleware->express->json
app.use(express.json());

// routes here
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on the Port ${PORT}`);
});
