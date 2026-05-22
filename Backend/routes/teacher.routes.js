const express = require("express");
const router = express.Router();
const { register } = require("../controllers/teacher.controllers");
router.post('/registerTeacher', register)
module.exports=router