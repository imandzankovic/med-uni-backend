var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true
  },

  text: {
    type: String,
    required: true
  },
  title2: {
    type: String,

  },
  text2: {
    type: String,
    //required: true
  },
  title3: {
    type: String,

  },
  text3: {
    type: String,
    //required: true
  },
  sumUp: {
    type: String
  },
  img: {
    type: String
  },
  video: {
    type: String
  },
  timestamp: { 
    type: Number,
     default: Date.now },

  author: { type: Schema.Types.ObjectId, ref: 'author' },

  //author: {type: Schema.Types.ObjectId, ref: 'user'},
  categories: [{ type: Schema.Types.ObjectId, ref: 'category' }]
});

module.exports = mongoose.model('post', PostSchema)