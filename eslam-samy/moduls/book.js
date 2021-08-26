const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const BookSchema = new Schema({
  bookName:{
    type : String,
    require:[true ,'Name field is required']
  },
  bookType :{
    type : String
  }

});

const Book = mongoose.model('book',BookSchema);

module.exports = Book;
