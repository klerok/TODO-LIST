import { useState } from "react";
import { Header } from "../../../../components/layout/Header/Header";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import { type Filter, type Task } from "../../../../types/index.d";
import styles from "./styles/index.module.css";
import { FilterBar } from "../FilterBar/FilterBar";

export function TodoManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const sortedTasks = [...tasks].sort(
    (a: Task, b: Task) => Number(a.status) - Number(b.status)
  );

  const filteredTasks = sortedTasks.filter((task: Task) => {
    if (filter === "active") return !task.status;
    if (filter === "completed") return task.status;
    return true;
  });

  const filterChange = (newFilter: Filter) => {
    setFilter(newFilter);
  };

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
        id: Date.now() + Math.random(),
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
        <div className={styles.task_tracker}>
          <FilterBar currentFilter={filter} onFilterChange={filterChange} />
          <span className={styles.task_tracker_create_text}>
            Созданные задачи: {tasks.length}
          </span>
          <span className={styles.task_tracker_complete_text}>
            Завершенные задачи: {tasks.filter((task) => task.status).length}/
            {tasks.length}
          </span>
        </div>
        <TodoList
          sortedTasks={filteredTasks}
          onRemove={removeTask}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
}
