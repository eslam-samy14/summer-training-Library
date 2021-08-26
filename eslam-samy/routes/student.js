const express = require('express');
const router = express.Router();
const Student = require('../moduls/student');

router.get('/students',async function(req,res,next){
  const students = await Student.find().catch(next);
  res.send(students);
});

router.post('/students',function(req,res,next){
  Student.create(req.body).then(function(student){
    res.send(student);
  }).catch(next);
});

router.put('/students/:id',function(req,res,next){
  Student.findByIdAndUpdate(req.params.id, req.body).then(function(student){
    Student.findOne({_id: req.params.id}).then(function(student){
      res.send(student);
    });
  });
});

router.delete('/students/:id',function(req,res,next){
  Student.findByIdAndRemove( req.params.id).then(function(student){
    res.send(student);
  });
});

module.exports = router;
