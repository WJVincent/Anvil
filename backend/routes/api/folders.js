const express = require("express");
const asyncHandler = require("express-async-handler");
const { Folder } = require("../../db/models");

const router = express.Router();

router.post(
  "/",
  asyncHandler(async (req, res) => {
    let { name, userId, categoryId } = req.body;

    userId = Number(userId);
    categoryId = Number(categoryId);

    const newFolder = await Folder.create({
      name,
      userId,
      categoryId,
    });
    res.send(newFolder);
  })
);

module.exports = router;
