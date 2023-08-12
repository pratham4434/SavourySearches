const express = require("express");
const { userReels } = require("../controllers/userController");
// const { registerUser, login } = require("../controllers/userController");

const router = express.Router();

// router.route('/register')
// .post(registerUser)

// router.route('/login')
// .post(login)

router.route("/reels/:email").get(userReels);

module.exports = router;
