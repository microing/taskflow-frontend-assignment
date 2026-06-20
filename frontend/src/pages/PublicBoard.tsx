import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "./PublicBoard.css";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function PublicBoard() {
  const { id } = useParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [boardName, setBoardName] = useState("");

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await api.get(`/public/board/${id}`);

        setTasks(res.data.tasks);
        setBoardName(res.data.boardName);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoard();
  }, [id]);

  return (
    <div className="public-page">
      <div className="public-container">

        <div className="public-header">
          <h1>{boardName}</h1>

          <p>
            Read-only shared board. Anyone with this link can
            view the current project tasks.
          </p>
        </div>

        <div className="public-badge">
          Public Shareable Board
        </div>

        <div className="task-grid">
          {tasks.map((task) => (
            <div key={task.id} className="public-task-card">
              <span className="status-badge">
                {task.status.toUpperCase()}
              </span>

              <h3>{task.title}</h3>

              <p>{task.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}