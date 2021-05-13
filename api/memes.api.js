const express = require("express");
const router = express.Router();

const { upload } = require("../middlewares/upload.helper");

const { createMeme } = require("../controllers/memes.controller");

router.get("/", function (req, res, next) {
  res.json({ status: "ok", data: "Get all memes" });
});

router.post("/", upload.single("image"), createMeme);

module.exports = router;
