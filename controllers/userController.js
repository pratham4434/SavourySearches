const asyncHandler = require("express-async-handler");
const userModel = require("../lib/db/models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const postReel = require("../lib/db/models/reelModel");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ username: username });
    if (userExist) {
      res.status(404).json({ message: "user is already there" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: hashPass,
    });
    const user = await newUser.save();
    // const token = jwt.sign(
    //     { username: user.username, id: user._id },
    //     process.env.JWT_KEY,
    //     { expiresIn: "1h" }
    // );
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        // const token = jwt.sign(
        // { username: user.username, id: user._id },
        // process.env.JWT_KEY,
        // { expiresIn: "1h" });
        res.status(200).json({ user });
      }
    } else {
      res.status(500).json("user are not registered");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const userReels = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;

    const posts = await postReel.find({ postedBy: email });
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json("cant find");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  registerUser,
  login,
  userReels,
};
