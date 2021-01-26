const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const folderRouter = require("./folders.js");

const { User } = require("../../db/models");
const { setTokenCookie } = require("../../utils/auth.js");

router.use("/session", sessionRouter);
router.use("/user", usersRouter);
router.use("/folder", folderRouter);

module.exports = router;
