import { useState } from "react";
import { Header } from "../../../../components/layout/Header/Header";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";

export function TodoManager() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      task: "feed cat",
      status: false,
    },
    {
      id: 1,
      task: "feed dog",
      status: false,
    },
    {
      id: 2,
      task: "find wallet",
      status: false,
    },
  ]);

  return (
    <>
      <Header />
      <TodoInput/>
      <TodoList tasks={tasks} />
    </>
  );
}
