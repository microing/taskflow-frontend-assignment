import TaskCard from "./TaskCard";
import "./Column.css";

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

type ColumnProps = {
  title: string;
  tasks: Task[];
  onDelete: (id: number) => void;
  onMove: (id: number) => void;
};

export default function Column({
  title,
  tasks,
  onDelete,
  onMove,
}: ColumnProps) {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 ? (
          <div className="empty-column">
            No tasks available
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              onDelete={onDelete}
              onMove={onMove}
            />
          ))
        )}
      </div>
    </div>
  );
}