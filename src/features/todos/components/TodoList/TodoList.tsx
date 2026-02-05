import type { Task } from "../../../../types";
import { EmptyState } from "../EmptyState/EmptyState";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from './styles/index.module.css'

export function TodoList({tasks}: {tasks: Task[]}) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task: Task) => (
        <TodoItem task={task}/>
      ))}
    </ul>
  );
}
