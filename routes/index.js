const express = require("express");
const router = express.Router();
const User = require("../models/User");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/auth/login");
  }
}

/* GET home page */
router.get("/", ensureAuthenticated, (req, res) => {
  res.render("index", { user: req.user });
});

router.get("/profile", ensureAuthenticated, (req, res) => {
  User.find().then(user => {
    res.render("user-profile", { user: req.user });
  });
});

router.get("/add-friend", ensureAuthenticated, (req, res) => {
  res.render("add-friend", { user: req.user });
});

router.get("/edit-profile", ensureAuthenticated, (req, res) => {
  //const username = req.body.username;

  User.findOne({ _id: req.query.user_id }).then(user => {
    res.render("user-create-chart", { user });
  });
});

router.post("/edit-profile", (req, res, next) => {
  // const location = req.body.location;
  // const birthday = req.body.birthday;
  // const birthtime = req.body.birthtime;
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
// router.get('/', (req, res, next) => {
//   Friend.find()
//     .then((friends) => {
//       res.render('index', { friends });
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//   let img = cloudinary.image("http://res.cloudinary.com/ironhack/image/upload/v1541754423/carrot/Star-Wars-9-will-correct-Rey-Luke-and-Kylo-Ren-storylines-1041757.jpg.jpg", { effect: "grayscale" })
//   console.log('DEBUG img', img);
// });

// router.get('/add-friend', (req, res, next) => {
//   res.render('movie-add')
// });

// // uploadCloud.single('photo') is a middleware
// // the parameter is 'photo' because we have
// // --->  <input type="file" name="photo">
// router.post('/movie/add', uploadCloud.single('photo'), (req, res, next) => {

//   const newMovie = new Movie({
//     title: req.body.title,
//     description: req.body.description,
//     imgPath: req.file.url,
//     imgName: req.file.originalname,
//   })
//   newMovie.save()
//     .then(movie => {
//       res.redirect('/')
//     })
//     .catch(error => {
//       console.log(error)
//     })
// });

module.exports = router;
