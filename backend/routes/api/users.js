const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  User,
  Folder,
  File,
  Category,
  FileType,
  Tag,
} = require("../../db/models");
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
                { model: FileType },
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
    res.send(userInfo);
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
