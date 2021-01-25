const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

const { User } = require("../../db/models");
const { setTokenCookie } = require("../../utils/auth.js");

router.use("/session", sessionRouter);
router.use("/user", usersRouter);

router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

module.exports = router;
