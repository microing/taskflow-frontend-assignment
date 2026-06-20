import "./TaskCard.css";
import { ArrowRight, Trash2 } from "lucide-react";

type TaskCardProps = {
  id: number;
  title: string;
  description: string;
  status: string;
  onDelete: (id: number) => void;
  onMove: (id: number) => void;
};

export default function TaskCard({
  id,
  title,
  description,
  status,
  onDelete,
  onMove,
}: TaskCardProps) {
  return (
    <div className="task-card">
      <div className="task-header">
        <span className={`priority-badge ${status}`}>
  {status.toUpperCase()}
</span>
      </div>

      <h3 className="task-title">{title}</h3>

      <p className="task-description">
    {description}
</p>

      <div className="task-footer">
        <button
          className="move-btn"
          onClick={() => onMove(id)}
        >
          <ArrowRight size={16} />
          <span>Move</span>
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(id)}
        >
          <Trash2 size={16} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}