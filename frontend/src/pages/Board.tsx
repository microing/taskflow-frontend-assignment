import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Globe, Plus } from "lucide-react";
import Column from "../components/Column";
import api from "../api/axios";
import "./Board.css";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function Board() {
  const { id } = useParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/tasks?boardId=${id}`);

        setTasks(res.data);
      } catch {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [id]);

  const addTask = async () => {
    if (!title.trim()) return;

    try {
      const res = await api.post("/tasks", {
        boardId: Number(id),
        title,
        description,
        status: "todo",
      });

      setTasks([...tasks, res.data]);

      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const moveTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    let newStatus = task.status;

    if (task.status === "todo") {
      newStatus = "progress";
    } else if (task.status === "progress") {
      newStatus = "done";
    } else {
      return;
    }

    try {
      await api.patch(`/tasks/${id}`, {
        status: newStatus,
      });

      setTasks(
        tasks.map((t) =>
          t.id === id
            ? { ...t, status: newStatus }
            : t
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const openPublicBoard = () => {
    window.open(`/public/board/${id}`, "_blank");
  };

  if (loading) {
    return (
      <div className="board-page">
        <h2 className="status-message">Loading Tasks...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="board-page">
        <h2 className="status-message error">{error}</h2>
      </div>
    );
  }

  return (
    <div className="board-page">
      <div className="board-container">

        <div className="board-header">
          <div>
            <h1>Project Board</h1>
            <p>
              Organize tasks, collaborate with your team and
              track progress across every stage.
            </p>
          </div>

          <button
  className="public-board-btn"
  onClick={openPublicBoard}
>
  <Globe size={18} />
  <span>View Public Board</span>
</button>
        </div>

        <div className="task-form-card">
          <h2>Create New Task</h2>

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />

          <button
  className="add-task-btn"
  onClick={addTask}
>
  <Plus size={18} />
  <span>Add Task</span>
</button>
        </div>

        <div className="board-columns">
          <Column
            title="Todo"
            tasks={tasks.filter((t) => t.status === "todo")}
            onDelete={deleteTask}
            onMove={moveTask}
          />

          <Column
            title="In Progress"
            tasks={tasks.filter((t) => t.status === "progress")}
            onDelete={deleteTask}
            onMove={moveTask}
          />

          <Column
            title="Done"
            tasks={tasks.filter((t) => t.status === "done")}
            onDelete={deleteTask}
            onMove={moveTask}
          />
        </div>
      </div>
    </div>
  );
}