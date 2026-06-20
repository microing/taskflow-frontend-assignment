const express = require("express");

const router = express.Router();

let tasks = [
  {
    id: 1,
    boardId: 1,
    title: "Login Page",
    description: "Build Login UI",
    status: "todo",
  },
  {
    id: 2,
    boardId: 1,
    title: "Dashboard UI",
    description: "Create Dashboard",
    status: "progress",
  },
  {
    id: 3,
    boardId: 1,
    title: "Deploy Project",
    description: "Deploy App",
    status: "done",
  },

  {
    id: 4,
    boardId: 2,
    title: "Landing Page",
    description: "Design Landing Page",
    status: "todo",
  },
  {
    id: 5,
    boardId: 2,
    title: "Dark Theme",
    description: "Create Dark UI",
    status: "progress",
  },

  {
    id: 6,
    boardId: 3,
    title: "Instagram Campaign",
    description: "Create Social Campaign",
    status: "todo",
  },
  {
    id: 7,
    boardId: 3,
    title: "SEO Optimization",
    description: "Improve Website Ranking",
    status: "done",
  },

  {
    id: 8,
    boardId: 4,
    title: "Email Campaign",
    description: "Prepare Marketing Emails",
    status: "todo",
  },
  {
    id: 9,
    boardId: 4,
    title: "Launch Ads",
    description: "Start Google Ads Campaign",
    status: "progress",
  },
];

// GET ALL TASKS
router.get("/tasks", (req, res) => {
  const boardId = Number(req.query.boardId);

  if (!boardId) {
    return res.json(tasks);
  }

  const boardTasks = tasks.filter(
    (task) => task.boardId === boardId
  );

  res.json(boardTasks);
});

// CREATE TASK
router.post("/tasks", (req, res) => {
  const { boardId, title, description, status } = req.body;

  const newTask = {
    id: Date.now(),
    boardId,
    title,
    description,
    status: status || "todo",
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// DELETE TASK
router.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  tasks = tasks.filter((task) => task.id !== id);

  res.json({
    message: "Task deleted",
  });
});

// UPDATE TASK STATUS
router.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  task.status = status;

  res.json(task);
});

router.get("/public/board/:id", (req, res) => {
  res.json({
    boardId: req.params.id,
    boardName: "Public Project Board",
    tasks: tasks,
  });
});

module.exports = router;