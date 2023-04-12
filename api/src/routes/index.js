const express = require("express");
const router = express.Router();

const characters = require("./characters");
const favorites = require("./favorites");
const login = require("./login");

router.use("/character", characters);
router.use("/favorite", favorites);
router.use("/login", login);

module.exports = router;
