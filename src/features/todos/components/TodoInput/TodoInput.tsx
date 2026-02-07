import { useState } from "react";
import styles from "./styles/index.module.css";

type TodoInputProps = {
  onAdd: (taskText: string) => void;
};

export function TodoInput({ onAdd }: TodoInputProps) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = taskText.trim();
    if (trimmedText) {
      onAdd(trimmedText);
      setTaskText("");
    }
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите задачу"
          value={taskText}
          className={styles.input_place}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit" className={styles.add_button}>
          Добавить задачу
        </button>
      </form>
    </>
  );
}
