const express = require("express");
const asyncHandler = require("express-async-handler");
const { Folder } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { name, userId, categoryId } = req.body;

    userId = Number(userId);
    categoryId = Number(categoryId);

    const newFolder = await Folder.create({
      name,
      userId,
      categoryId,
    });
    res.json(newFolder);
  })
);

router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const folderId = await parseInt(req.params.id, 10);
    const { name, categoryId, userId } = req.body;

    const folder = await Folder.findByPk(folderId);

    if (name !== "") folder.name = name;
    if (categoryId !== "") folder.categoryId = categoryId;

    await folder.save();

    const folders = await Folder.findAll({ where: { userId: Number(userId) } });

    res.json(folders);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const folderId = await parseInt(req.params.id, 10);
    const { userId } = req.body;

    const folder = await Folder.findByPk(folderId);
    await folder.destroy();

    const folders = await Folder.findAll({ where: { userId: Number(userId) } });
    res.json(folders);
  })
);

module.exports = router;
