import { useState } from "react";
import { Header } from "../../../../components/layout/Header/Header";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import type { Task } from "../../../../types";
import styles from "./styles/index.module.css";

export function TodoManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const sortedTasks = [...tasks].sort(
    (a: Task, b: Task) => Number(a.status) - Number(b.status)
  );

  const toggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  const addTask = (taskText: string) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        task: taskText,
        status: false,
      },
    ]);
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.inputWrapper}>
        <TodoInput onAdd={addTask} />
      </div>
      <div className={styles.listSection}>
        <TodoList
          sortedTasks={sortedTasks}
          onRemove={removeTask}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
}
