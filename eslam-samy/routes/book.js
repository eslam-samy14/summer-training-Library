const express = require('express');
const router = express.Router();
const Book = require('../moduls/book');

router.get('/books',async function(req,res,next){
  const books = await Book.find().catch(next);
  res.send(books);
});

router.post('/books',function(req,res,next){
  Book.create(req.body).then(function(book){
    res.send(book);
  }).catch(next);
});

router.put('/books/:id',function(req,res,next){
  Book.findByIdAndUpdate(req.params.id, req.body).then(function(book){
    Book.findOne({_id: req.params.id}).then(function(book){
      res.send(book);
    });
  });
});

router.delete('/books/:id',function(req,res,next){
  Book.findByIdAndRemove( req.params.id).then(function(book){
    res.send(book);
  });
});

module.exports = router;
