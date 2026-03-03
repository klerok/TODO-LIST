import type { Task } from "../../../types";

const STORAGE_KEY = "todos";

export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null || raw === "") return [];
    return JSON.parse(raw) as Task[];
  } catch (error) {
    console.error("loadTasks error:", error);
    return [];
  }
}

export function saveTasks(tasks: Task[]) {
  try {
    const save = localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    return save
  } catch (error) {
    console.error('saveTasks error', error)
  }
}