const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth");
const { User, Folder, File, Category, Tag } = require("../../db/models");
const validateSignup = require("../../utils/validators/validateSignup");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.params.id, 10);

    const userInfo = await User.findByPk(userId, {
      include: [
        {
          model: Folder,
          include: [
            { model: Category },
            {
              model: File,
              includes: [
                {
                  model: Tag,
                  through: { attributes: [] },
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(userInfo);
  })
);

router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;
