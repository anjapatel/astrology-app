const express = require("express");
const User = require("../models/User");
const Friend = require('../models/Friend.js')
const uploadCloud = require("../config/cloudinary.js");
const router = express.Router();



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

/* Get User profile ======================================================== */
router.get("/profile", ensureAuthenticated, (req, res) => {
  User.find().then(user => {
    res.render("user-profile", { user: req.user });
  });
});

/* Create User profile (enter birthchart) ======================================================== */



/* Edit User profile ======================================================== */
router.get("/edit-profile", ensureAuthenticated, (req, res) => {
  User.findOne({ _id: req.query.user_id }).then(user => {
    res.render("user-create-chart", { user });
  });
});

router.post("/edit-profile", uploadCloud.single("photo"), (req, res, next) => {
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const { location, birthday, birthtime } = req.body;
  console.log(req.body);
  User.updateOne(
    { _id: req.user._id },
    { $set: { location, birthday, birthtime, imgPath, imgName } },
    { new: true }
  )
    .then(user => {
      res.redirect("/profile");
      console.log("profile updated");
    })
    .catch(err => {
      console.log("profile creation error");
    });
});


/* Add Friend ========================================================== */

router.get('/add-friend', ensureAuthenticated, (req, res, next) => {
  res.render('add-friend', { user: req.user })
});

// uploadCloud.single('photo') is a middleware
// the parameter is 'photo' because we have
// --->  <input type="file" name="photo">
router.post("/add-friend", uploadCloud.single('photo'), (req, res, next) => {
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  const newFriend = new Friend({
    name: req.body.name,
    birthday: req.body.birthday,
    birthtime: req.body.birthtime,
    birthplace: req.body.birthplace,
    location: req.body.location,
    imgPath,
    imgName
  });
  newFriend
    .save()
    .then(friend => {
      console.log("A new friend was added:  " + friend._id);
      res.redirect("/");
    })
    .catch(error => {
      console.log(error)
    })
});



/* Friend detail page ========================================================== */
router.get('/:id', (req, res, next) => {
  let id = req.params.id // the id from the url
  Friend.findById(id)
    .then(friendFromDb => {
      res.render('detail-friend', {
        friend: friendFromDb
      })
    })
    .catch(error => {
      next(error)
    })
})


/* Delete Friend ========================================================== */
router.get('/:id/delete', (req, res, next) => {
  Friend.findByIdAndRemove(req.params.id)
    .then(friend => {
      res.redirect('/')
    })
})


module.exports = router;
