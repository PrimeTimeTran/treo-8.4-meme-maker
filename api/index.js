var express = require("express");
var router = express.Router();

const memeAPI = require("./memes.api");
router.use("/memes", memeAPI);

// const userAPI = require("./users.api");
// router.use("/users", userAPI);

// const postAPI = require("./posts.api");
// router.use("/posts", postAPI);

// const commentAPI = require("./comments.api");
// router.use("/memes", commentAPI);

// const reactionAPI = require("./reactions.api");
// router.use("/memes", reactionAPI);

module.exports = router;
