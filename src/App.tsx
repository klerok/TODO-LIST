import "./App.css";
import { Header } from "./components/layout/Header/Header.tsx";
import { TodoInput } from "./features/todos/components/TodoInput/TodoInput.tsx";

function App() {
  return (
    <>
      <Header />
      <TodoInput/>
    </>
  );
}

export default App;
