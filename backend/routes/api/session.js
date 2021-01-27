const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");
const validateLogin = require("../../utils/validators/validateLogin");

const router = express.Router();

router.get("/", restoreUser, (req, res) => {
  const { user, userData } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject(),
      userData,
    });
  } else return res.json({});
});

router.post(
  "/",
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { credentials, password } = req.body;

    const user = await User.login({ credentials, password });

    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

module.exports = router;
