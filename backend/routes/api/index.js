const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const folderRouter = require("./folders.js");
const categoryRouter = require("./category.js");

router.use("/session", sessionRouter);
router.use("/user", usersRouter);
router.use("/folder", folderRouter);
router.use("/category", categoryRouter);

module.exports = router;
