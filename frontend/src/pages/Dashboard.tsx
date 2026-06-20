import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Dashboard.css";

interface Board {
  id: number;
  name: string;
}

export default function Dashboard() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [workspaceId, setWorkspaceId] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await api.get(
          `/boards?workspaceId=${workspaceId}`
        );

        setBoards(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoards();
  }, [workspaceId]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <h1>TaskFlow Dashboard</h1>
            <p>
              Manage your workspaces, boards and collaborate
              efficiently.
            </p>
          </div>

          <select
            className="workspace-select"
            value={workspaceId}
            onChange={(e) =>
              setWorkspaceId(Number(e.target.value))
            }
          >
            <option value={1}>Development Team</option>
            <option value={2}>Marketing Team</option>
          </select>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>{boards.length}</h3>
            <span>Boards</span>
          </div>

          <div className="stat-card">
            <h3>{workspaceId === 1 ? "Development" : "Marketing"}</h3>
            <span>Active Workspace</span>
          </div>

          <div className="stat-card">
            <h3>Active</h3>
            <span>Status</span>
          </div>
        </div>

        <h2 className="section-title">
          Available Boards
        </h2>

        <div className="boards-grid">
          {boards.map((board) => (
            <div
              key={board.id}
              className="board-card"
              onClick={() =>
                navigate(`/board/${board.id}`)
              }
            >
              <div className="board-icon">📋</div>

              <h3>{board.name}</h3>

              <p>
                Click to manage tasks and collaborate with
                your team.
              </p>

              <button>
                Open Board →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}