const express = require("express");
const User = require("../models/User");
const Friend = require("../models/Friend");
const uploadCloud = require("../config/cloudinary");
const createZodiac = require("../utils").createZodiac;
const calculateCompatability = require("../calculation").calculateCompatability;
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
  const userZodiac = req.user.zodiac;

  Friend.find()
    .then(friendsFromDb => {
      for (let i = 0; i < friendsFromDb.length; i++) {
        const friendZodiac = friendsFromDb[i].zodiac;
        compatability = calculateCompatability(friendZodiac, userZodiac);
        friendsFromDb[i].compatability = compatability;
      }
      res.render("index", {
        listOfFriends: friendsFromDb,
        user: req.user,
        compatability
      });
    })
    .catch(error => {
      console.log(error);
    });
});

/* Get User profile ======================================================== */

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
    const { location, birthday, birthmonth, birthtime, birthplace } = req.body;
    User.updateOne(
      { _id: req.user._id },
      {
        $set: {
          location,
          birthday,
          birthmonth,
          birthtime,
          birthplace,
          imgPath,
          imgName,
          zodiac: createZodiac({ birthmonth, birthday })
        }
      },
      { new: true }
    )
      .then(user => {
        res.redirect("/profile");
      })

      .catch(err => {
        console.log("profile creation error", err);
      });
  }
);

/* direct to profile ========================================================== */

router.get("/profile", ensureAuthenticated, (req, res) => {
  User.findOne().then(user => {
    res.render("user-profile", { user: req.user });
  });
});

/* Compatibility page ========================================================== */
router.get("/compatibility/:id", (req, res, next) => {
  const userZodiac = req.user.zodiac;
  Friend.findById(req.params.id).then(friend => {
    const friendZodiac = friend.zodiac;
    const compatability = calculateCompatability(friendZodiac, userZodiac);
    res.render("compatibility", {
      user: req.user,
      friend,
      compatability
    });
  });
});

/* Add Friend ========================================================== */

router.get("/add-friend", ensureAuthenticated, (req, res, next) => {
  res.render("add-friend", { user: req.user });
});

router.post("/add-friend", uploadCloud.single("photo"), (req, res, next) => {
  const {
    name,
    birthmonth,
    birthday,
    birthtime,
    birthplace,
    location
  } = req.body;
  let friend = {
    name,
    birthday,
    birthmonth,
    birthtime,
    birthplace,
    location,
    zodiac: createZodiac({ birthmonth, birthday })
  };
  if (req.file) {
    friend.imgPath = req.file.url;
    friend.imgName = req.file.originalname;
  }
  const newFriend = new Friend(friend);
  newFriend.save().then(newfriend => {
    res.redirect("/compatibility/" + newFriend._id);
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
router.get("/edit-friend/:id", (req, res, next) => {
  Friend.findById(req.params.id).then(friend => {
    res.render("edit-friend", { friend });
  });
});

router.post(
  "/edit-friend/:id",
  uploadCloud.single("photo"),
  (req, res, next) => {
    const birthmonth = req.body.birthmonth;
    const birthday = req.body.birthday;
    let update = {
      name: req.body.name,
      birthday: req.body.birthday,
      birthmonth: req.body.birthmonth,
      birthtime: req.body.birthtime,
      birthplace: req.body.birthplace,
      location: req.body.location,
      zodiac: createZodiac({ birthmonth, birthday })
    };
    if (req.file) {
      update.imgPath = req.file.url;
      update.imgName = req.file.originalname;
    }
    Friend.findByIdAndUpdate(req.params.id, update).then(friend => {
      console.log("req.body.birthday");
      res.redirect("/" + friend._id);
    });
  }
);

/* Delete Friend ========================================================== */
router.get("/:id/delete", (req, res, next) => {
  Friend.findByIdAndRemove(req.params.id).then(friend => {
    res.redirect("/");
  });
});

module.exports = router;
