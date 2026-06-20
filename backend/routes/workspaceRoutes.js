const express = require("express");

const router = express.Router();

router.get("/workspaces", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Development Team",
    },
    {
      id: 2,
      name: "Marketing Team",
    },
  ]);
});

module.exports = router;