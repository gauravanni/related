var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var KeywordSchema= new Schema({
  url:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  category:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  title:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

module.exports=mongoose.model('Keyword',KeywordSchema);
