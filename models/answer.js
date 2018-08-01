var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogAnswer = new Schema({
    answer:  {
      type : String,
      required : true
    },
    user : {
        type  : Schema.Types.ObjectId,ref :'user'
    },
    question :{
        type  : Schema.Types.ObjectId,ref :'question'
    },
    vote :{
        type : Number
    },
    timestamps : {
        createdAt : 'created_at',
        updateAt : 'updated_at'
    }
  });

var question = mongoose.model('user',blogQuestion)

module.exports = question