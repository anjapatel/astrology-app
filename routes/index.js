const express = require("express");
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
  res.render("index", { user: req.user });
});

router.get("/profile", ensureAuthenticated, (req, res) => {
  res.render("user-profile", { user: req.user });
});

router.get("/add-friend", ensureAuthenticated, (req, res) => {
  res.render("add-friend", { user: req.user });
});

module.exports = router;
