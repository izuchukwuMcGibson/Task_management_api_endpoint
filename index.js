const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

let tasks = [];
let nextId = 1;

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a non-empty string." });
  }

  if (typeof description !== "string") {
    return res
      .status(400)
      .json({ error: "Description must be a string if provided." });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description || "",
  };

  tasks.push(newTask);
  res.status(201).json({
    message: "Task created successfully",
    task: newTask,
  });
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((currentTask) => currentTask.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  res.status(200).json(task);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
