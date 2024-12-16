const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yashjain0112233:<password>@bookstoreapi.kdius.mongodb.net/"
    );
    console.log("DataBase Connected 🚉🚉🚉");
  } catch (e) {
    console.log("Error in connection->", e);
    process.exit(1);
  }
};

module.exports = connectDB;
