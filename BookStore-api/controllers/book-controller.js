const book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "list of All Books Are:",
        data: allBooks,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "No Books is present in db ",
      });
    }
  } catch (e) {
    console.log(`Error->${e}`);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong! Please Contact to the admin Team",
    });
  }
};
const getSingleBook = async (req, res) => {
  try {
    const singleBook = req.params.id;
    const bookDetails = await book.findById(singleBook);
    if (!bookDetails) {
      return res.status(404).json({
        success: false,
        message: "Book with this Id Is not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book Details if Your Id:-",
        data: bookDetails,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong! Please Contact to the admin Team",
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book Added Successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log(`Error->${e}`);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong! Please Contact to the admin Team",
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const updatedBookdata = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookdata,
      {
        new: true,
      }
    );
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book with this Id Is not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book Updated",
        data: updatedBook,
      });
    }
  } catch (e) {
    console.log(`Error->${e}`);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong! Please Contact to the admin Team",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const getCurrentBook = req.params.id;
    const deletedBook = await book.findByIdAndDelete(getCurrentBook);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book with this Id Is not Found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book Deleted",
        data: deletedBook,
      });
    }
  } catch (e) {
    console.log(`Error->${e}`);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong! Please Contact to the admin Team",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
