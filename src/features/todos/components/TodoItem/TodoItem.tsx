import type { Task } from "../../../../types";
import styles from './styles/index.module.css';
import trashIconDefault from "../../../../assets/images/hover=false.png";
import trashIconHover from "../../../../assets/images/hover=true.png";
import { useState } from "react";

export function TodoItem({ task }: { task: Task }) {
  const [isHoveringTrash, setIsHoveringTrash] = useState(false);

  return (
    <li className={styles.list_item}>
      <label className={styles.checkbox_wrapper}>
        <input 
          type="checkbox" 
          checked={task.status}
          readOnly
          className={styles.checkbox}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span className={task.status ? styles.task_text_completed : styles.task_text}>
        {task.task}
      </span>
      <button 
        type="button" 
        className={styles.delete_button}
        aria-label="Удалить задачу"
        onMouseEnter={() => setIsHoveringTrash(true)}
        onMouseLeave={() => setIsHoveringTrash(false)}
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