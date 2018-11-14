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
    imgPath: { type: String, default: "https://res.cloudinary.com/dvgji8j2h/image/upload/v1542134837/043534b25499cac89219da17a8095f56adebbe0aaea5-Rjj72r.jpg" },
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
