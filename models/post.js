var mongoose = require('mongoose');
var postSchema=new mongoose.Schema({
    'title': {
        'type': String,
        'required': true
    },
    'author': {
        'type': String,
        'required': true
    },
    'category': {
        'type': String,
        'required': false
    },
    'body': {
        'type': String,
        'required': true
    },
    'date' : {
      'type' : Date,
      required:true
    }
});
// collection name
module.exports=mongoose.model('posts', postSchema);
