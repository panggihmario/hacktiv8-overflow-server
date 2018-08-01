var mongoose = require('mongoose')

var Schema = mongoose.Schema
var blogQuestion = new Schema({
    question:  {
      type : String,
      required : true
    },
    user : {
        type  : Schema.Types.ObjectId,ref :'user'
    },
    vote : Number,
    timestamps : {
        createdAt : 'created_at',
        updateAt : 'updated_at'
    }
  });

var question = mongoose.model('user',blogQuestion)

module.exports = question