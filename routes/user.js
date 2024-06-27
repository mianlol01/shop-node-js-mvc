const express = require("express");
const router = express.Router();
const userConstroller = require("../controllers/userConstroller");

router.get("/Login", userConstroller.getUser);
router.post("/Login", userConstroller.postLogin);
router.post("/SignUp", userConstroller.postUser);

module.exports = router;
