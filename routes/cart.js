// routes/shop.js
const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.postCart);
router.get("/", cartController.getCart);

module.exports = router;
