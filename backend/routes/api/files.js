const express = require("express");
const asyncHandler = require("express-async-handler");

const { File, Folder } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    let { name, content, folderId, userId } = req.body;
    folderId = Number(folderId);

    const newFile = await File.create({
      name,
      content,
      folderId,
    });

    const updatedFolders = await Folder.findAll({
      where: { userId: Number(userId), include: { model: File } },
    });
    res.json(updatedFolders);
  })
);

router.put(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const fileId = await parseInt(req.params.id, 10);
    const { name, content, userId } = req.body;

    const file = await File.findByPk(fileId);

    file.name = name;
    file.content = content;

    await file.save();

    const updatedFolders = await Folder.findAll({
      where: { userId: Number(userId) },
      include: { model: File },
    });
    res.json(updatedFolders);
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const fileId = await parseInt(req.params.id, 10);
    const { userId } = req.body;
    const file = await File.findByPk(fileId);
    await file.destroy();

    const updatedFolders = await Folder.findAll({
      where: { userId: Number(userId) },
      include: { model: File },
    });
    res.json(updatedFolders);
  })
);

module.exports = router;
