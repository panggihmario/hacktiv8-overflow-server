var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogUser = new Schema({
    name:  {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
  });

var user = mongoose.model('user',blogUser)

module.exports = user