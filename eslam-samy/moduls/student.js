const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema = new Schema({
  studentName:{
    type : String,
    require:[true ,'Name field is required']
  },
  studentAge :{
    type : String
  },
  studentPhone : {
    type : String
  }

});

const Student = mongoose.model('student',StudentSchema);

module.exports = Student;
