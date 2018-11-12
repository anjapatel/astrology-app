const express = require("express");

const Friend = require("../models/Friend.js");

const router = express.Router();
const User = require("../models/User");
const uploadCloud = require("../config/cloudinary.js");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/login");
  }
}

/* GET home page */
router.get("/", ensureAuthenticated, (req, res) => {
  console.log("Rendering list of friends");
  Friend.find()
    .then(friendsFromDb => {
      res.render("index", {
        listOfFriends: friendsFromDb
      });
    })
    .catch(error => {
      console.log(error);
    });
  /* res.render("index", { user: req.user }); */
});

router.get("/profile", ensureAuthenticated, (req, res) => {
  User.findOne().then(user => {
    res.render("user-profile", { user: req.user });
  });
});

router.get("/edit-profile/:id", ensureAuthenticated, (req, res) => {
  User.findOne({ _id: req.user_id }).then(users => {
    const user = req.user;
    res.render("user-create-chart", { user });
  });
});

router.post(
  "/edit-profile/:id",
  uploadCloud.single("photo"),
  (req, res, next) => {
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
    const { location, birthday, birthtime, birthplace } = req.body;
    console.log(req.body);
    User.updateOne(
      { _id: req.user._id },
      { $set: { location, birthday, birthtime, birthplace, imgPath, imgName } },
      { new: true }
    )
      .then(user => {
        res.redirect("/profile");
        console.log("profile updated");
      })
      .catch(err => {
        console.log("profile creation error");
      });
  }
);

/* Add Friend ========================================================== */

router.get("/add-friend", (req, res, next) => {
  res.render("add-friend");
});

// uploadCloud.single('photo') is a middleware
// the parameter is 'photo' because we have
// --->  <input type="file" name="photo">
router.post(
  "/add-friend", //uploadCloud.single('photo'),
  (req, res, next) => {
    const newFriend = new Friend({
      name: req.body.name,
      birthday: req.body.birthday,
      birthtime: req.body.birthtime,
      birthplace: req.body.birthplace,
      location: req.body.location
      //imgPath: req.file.url,
      //imgName: req.file.originalname,
    });
    newFriend
      .save()
      .then(friend => {
        console.log("A new friend was added:  " + friend._id);
        res.redirect("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
);

module.exports = router;
