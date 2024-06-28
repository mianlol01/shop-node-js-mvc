const express = require("express");
const router = express.Router();
const userConstroller = require("../controllers/userConstroller");

router.get("/Login", userConstroller.getUser);
router.post("/Login", userConstroller.postLogin);
router.get("/SignUp", userConstroller.getSignup);
router.post("/SignUp", userConstroller.postSignup);

module.exports = router;
