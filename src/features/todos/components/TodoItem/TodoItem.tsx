import type { Task } from "../../../../types";
import styles from "./styles/index.module.css";
import trashIconDefault from "../../../../assets/images/hover=false.png";
import trashIconHover from "../../../../assets/images/hover=true.png";
import { useState } from "react";

type TodoItemProps = {
  task: Task;
  onRemove: (taskId: number) => void;
  onToggle: (taskId: number) => void;
};

export function TodoItem({ task, onRemove, onToggle }: TodoItemProps) {
  const [isHoveringTrash, setIsHoveringTrash] = useState(false);

  const handleDelete = () => {
    onRemove(task.id);
  };

  const handleToggle = () => {
    if (task.status === false) {
      onToggle(task.id);
    }
  }

  return (
    <li className={styles.list_item}>
      <label className={styles.checkbox_wrapper}>
        <input
          type="checkbox"
          checked={task.status}
          className={styles.checkbox}
          onChange={handleToggle}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span
        className={task.status ? styles.task_text_completed : styles.task_text}
      >
        {task.task}
      </span>
      <button
        type="button"
        className={styles.delete_button}
        aria-label="Удалить задачу"
        onMouseEnter={() => setIsHoveringTrash(true)}
        onMouseLeave={() => setIsHoveringTrash(false)}
        onClick={handleDelete}
      >
        <img
          src={isHoveringTrash ? trashIconHover : trashIconDefault}
          alt="Удалить"
          className={styles.delete_icon}
        />
      </button>
    </li>
  );
}
