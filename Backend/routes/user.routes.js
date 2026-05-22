const express = require("express");
const router = express.Router();

const { register,logout } = require("../controllers/user.controllers");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/file.middleware");
router.post('/register', 
      (req, res, next) => {
    console.log("REQUEST ARRIVED");
    next();
  },

    upload.single('profilePicture'), register);
router.post('/logout', auth, logout);



module.exports = router;