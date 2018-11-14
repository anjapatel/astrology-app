const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    birthmonth: Number,
    birthday: Number,
    birthtime: String,
    birthplace: String,
    location: String,
    imgName: String,
    imgPath: { type: String, default: "https://res.cloudinary.com/dvgji8j2h/image/upload/v1542134871/edgar-cayce-on-astrology.png" },
    zodiac: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
