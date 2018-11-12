const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  birthday: String,
  birthtime: String,
  birthplace: String,
  location: String,
  //photo
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;
