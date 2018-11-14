const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema(
  {
    name: String,
    birthmonth: Number,
    birthday: Number,
    birthtime: String,
    birthplace: String,
    location: String,
    imgName: String,
    imgPath: String,
    zodiac: String,
    _creator: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Friend = mongoose.model("Friend", friendSchema);
module.exports = Friend;
