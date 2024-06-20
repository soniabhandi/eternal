const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

router.get("/", (req, res) => {
  res.send("hey");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.send("You don't have permission create a new owner");
    }
    const { fullName, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullName,
      email,
      password,
    });
    res.status(200).send("You can create new Owner");
    console.log(createdOwner);
  });
}

module.exports = router;
