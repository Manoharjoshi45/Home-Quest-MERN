require('dotenv').config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Property = require("../models/propertySchema");


const authenticate = (req, res, next) => {
  const authToken = req.header("Authorization");
  if (!authToken) return res.status(400).send("Access Denied");

  try {
    const decoded = jwt.verify(authToken, process.env.JWTSECRET);

    req.userFound = decoded;
    next();
  } catch (e) {
    res.status(400).send("Invalid token.");
  }
};

const isSeller = (req, res, next) => {
  if (!req.userFound || req.userFound.userRole !== "seller") {
    return res
      .status(403)
      .send("Access denied. Only sellers can perform this action.");
  }
  next();
};
router.post("/propertyData",async (req,res)=>{
  try {
    const properties = await Property.find({});
    res.status(200).json(properties);
} catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
}

})
router.post("/createProperty", authenticate, isSeller, async (req, res) => {
  try {
    await Property.create({
      owner: req.userFound.userId,
      img:req.body.img,
      title: req.body.title,
      description: req.body.description,
      area: req.body.area,
      bedrooms: req.body.bedrooms,
      bathrooms: req.body.bathrooms,
      nearby: req.body.nearby,
    });
    res.json({success:true});
  } catch (e) {
    console.log(e);
    res.status(500).send({success:false});
  }
});

router.put("/modifyProperty", authenticate, isSeller, async (req, res) => {
  try {
    const newProperty = Property.findOne({
      owner: req.userFound.userId,
      _id: req.body.id,
    });
    if (!newProperty) {
      return res.status(400).send({success:false});
    }
    newProperty
      .updateMany({
        owner: req.userFound.userId,
        img:req.body.img,
        title: req.body.title,
        description: req.body.description,
        area: req.body.area,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        nearby: req.body.nearby,
      })
      .then(res.send({success:true}));
  } catch (e) {
    console.log(e);
    res.status(400).send({success:false});
  }
});

router.delete("/deleteProperty", authenticate, isSeller, async (req, res) => {
  try {
    const newProperty = await Property.findOne({
      owner: req.userFound.userId,
      _id: req.body.id,
    });

    if (!newProperty) {
      return res.status(404).send({success:false});
    }

    await newProperty.deleteOne();
    res.send({success:true});
  } catch (e) {
    console.log(e);
    res.status(500).send({success:false});
  }
});

module.exports = router;
