const express = require("express");
const User = require("../models/User");
const Friend = require("../models/Friend");
const uploadCloud = require("../config/cloudinary");
const createZodiac = require("../utils").createZodiac;
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
        user: req.user,
        listOfFriends: friendsFromDb
      });
    })
    .catch(error => {
      console.log(error);
    });
});


/* Get User profile ======================================================== */
router.get("/edit-profile/:id", ensureAuthenticated, (req, res, next) => {
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
    const { location, birthmonth, birthtime, birthplace } = req.body;
    // const zodiac = createZodiac(req.user);
    User.updateOne(
      { _id: req.user._id },
      {
        $set: {
          location,
          // birthday,
          birthmonth,
          birthtime,
          birthplace,
          imgPath,
          imgName,
          // zodiac: createZodiac({ birthmonth, birthday })
        }
      },
      { new: true }
    )
      .then(user => {
        res.redirect("/profile");
        console.log("profile updated");
      })

      .catch(err => {
        console.log("profile creation error", err);
      });
  }
);
//   }
// );

router.get("/profile", ensureAuthenticated, (req, res, next) => {
  User.findOne().then(user => {
    // console.log("this is my zodiac sign " + createZodiac(req.user));
    res.render(
      "user-profile",
      { user: req.user }
      // { zodiac: createZodiac(req.user) }
    );
  });
});


/* Compatibility page ========================================================== */
router.get("/compatibility/:id", (req, res, next) => {
  Friend.findById(req.params.id)
    .then(friend => {
      res.render("compatibility", {
        user: req.user,
        friend
      })
    })
});


/* Add Friend ========================================================== */

router.get("/add-friend", ensureAuthenticated, (req, res, next) => {
  res.render("add-friend", { user: req.user });
});

// uploadCloud.single('photo') is a middleware
// the parameter is 'photo' because we have
// --->  <input type="file" name="photo">
router.post("/add-friend", uploadCloud.single("photo"), (req, res, next) => {
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
      //console.log("A new friend was added:  " + friend._id);
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    });
});

/* Friend detail page ========================================================== */
router.get("/:id", (req, res, next) => {
  let id = req.params.id; // the id from the url
  Friend.findById(id)
    .then(friendFromDb => {
      res.render("detail-friend", {
        friend: friendFromDb
      });
    })
    .catch(error => {
      next(error);
    });
});

/* Edit Friend  =============================================================*/
router.get('/edit-friend/:id', (req, res, next) => {
  Friend.findById(req.params.id)
    .then(friend => {
      res.render('edit-friend', { friend })
    })
})

router.post('/edit-friend/:id', uploadCloud.single('photo'),
  (req, res, next) => {
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
    // console.log(req.params.id)
    Friend.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      birthday: req.body.birthday,
      birthtime: req.body.birthtime,
      birthplace: req.body.birthplace,
      location: req.body.location,
      imgPath,
      imgName
    })
      .then(friend => {
        console.log("req.body.birthday")
        res.redirect('/' + friend._id)
      })
  })

/* Delete Friend ========================================================== */
router.get("/:id/delete", (req, res, next) => {
  Friend.findByIdAndRemove(req.params.id).then(friend => {
    res.redirect("/");
  });
});



module.exports = router;
