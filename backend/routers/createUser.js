require('dotenv').config();
const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post("/createUser", [
  body("email").isEmail(),
  body("phone").isLength({ min: 10, max: 10 }),
  body("password").isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  const setPassword = await bcrypt.hash(req.body.password, salt);

  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: setPassword,
      role: req.body.role,
    });
    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});

router.post("/loginUser", [
  body("email").isEmail(),
  body("password").isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(400).json({ errors: "Error in logging" });
    }

    const pwdCompare = await bcrypt.compare(req.body.password, userFound.password);
    if (!pwdCompare) {
      return res.status(400).json({ errors: "Error in logging" });
    }

    const authToken = jwt.sign({userId: userFound.id, userRole: userFound.role }, process.env.JWTSECRET);
    return res.json({ success:true,authToken });
  } catch (e) {
    console.log(e);
    res.json({ success: false });
  }
});

module.exports = router;
