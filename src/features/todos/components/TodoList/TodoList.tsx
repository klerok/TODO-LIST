import type { Task } from "../../../../types";
import { EmptyState } from "../EmptyState/EmptyState";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./styles/index.module.css";

type TodoListProps = {
  sortedTasks: Task[];
  onRemove: (taskId: number) => void;
  onToggle: (taskId: number) => void;
};

export function TodoList({ sortedTasks, onRemove, onToggle }: TodoListProps) {
  if (sortedTasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {sortedTasks.map((task: Task) => (
          <TodoItem
            task={task}
            onRemove={onRemove}
            key={task.id}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}
