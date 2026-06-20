const express = require("express");

const router = express.Router();

const boards = [
  {
    id: 1,
    workspaceId: 1,
    name: "Project Board",
  },
  {
    id: 2,
    workspaceId: 1,
    name: "Design Board",
  },
  {
    id: 3,
    workspaceId: 2,
    name: "Marketing Board",
  },
  {
    id: 4,
    workspaceId: 2,
    name: "Campaign Board",
  },
];

router.get("/boards", (req, res) => {
  const workspaceId = Number(req.query.workspaceId);

  if (!workspaceId) {
    return res.json(boards);
  }

  const filteredBoards = boards.filter(
    (board) => board.workspaceId === workspaceId
  );

  res.json(filteredBoards);
});

module.exports = router;