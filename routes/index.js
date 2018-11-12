const express = require("express");
const User = require("../models/User");
const Friend = require('../models/Friend.js')
//const cloudinary = require('cloudinary');
//const uploadCloud = require('../config/cloudinary.js');
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
  console.log("Rendering list of friends")
  Friend.find()
    .then(friendsFromDb => {
      res.render('index', {
        listOfFriends: friendsFromDb
      });
    })
    .catch((error) => {
      console.log(error)
    })
  /* res.render("index", { user: req.user }); */
});

router.get("/profile", ensureAuthenticated, (req, res) => {
  User.find().then(user => {
    res.render("user-profile", { user: req.user });
  });
});


router.get("/edit-profile", ensureAuthenticated, (req, res) => {
  User.findOne({ _id: req.query.user_id }).then(user => {
    res.render("user-create-chart", { user });
  });
});

router.post("/edit-profile", (req, res, next) => {
  const { location, birthday, birthtime } = req.body;
  console.log(req.body);
  User.updateOne(
    { _id: req.user._id },
    { $set: { location, birthday, birthtime } },
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
// let img = cloudinary.image("http://res.cloudinary.com/ironhack/image/upload/v1541754423/carrot/Star-Wars-9-will-correct-Rey-Luke-and-Kylo-Ren-storylines-1041757.jpg.jpg", { effect: "grayscale" })
// console.log('DEBUG img', img);

router.get('/add-friend', ensureAuthenticated, (req, res, next) => {
  res.render('add-friend', { user: req.user })
});

// uploadCloud.single('photo') is a middleware
// the parameter is 'photo' because we have 
// --->  <input type="file" name="photo">
router.post('/add-friend', //uploadCloud.single('photo'), 
  (req, res, next) => {

    const newFriend = new Friend({
      name: req.body.name,
      birthday: req.body.birthday,
      birthtime: req.body.birthtime,
      birthplace: req.body.birthplace,
      location: req.body.location
      //imgPath: req.file.url,
      //imgName: req.file.originalname,
    })
    newFriend.save()
      .then(friend => {
        console.log("A new friend was added:  " + friend._id)
        res.redirect('/')
      })
      .catch(error => {
        console.log(error)
      })
  });

/* Delete Friend ========================================================== */
router.get('/:id/delete', (req, res, next) => {
  Friend.findByIdAndRemove(req.params.id)
    .then(friend => {
      res.redirect('/')
    })
})


module.exports = router;
