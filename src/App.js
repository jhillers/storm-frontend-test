import './App.css'
import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList/TodoList";
import AddItemButton from "./components/UI/AddItemButton";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    const response = await fetch('http://localhost:4000/api/task', {
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    const json = await response.json();
    setIsLoading(false);
    setTasks(json);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  return (<>
    <div className="mainContent">
        <h1>Todo list</h1>
        <AddItemButton/>
      </div>
      <section>
       {!isLoading && <TodoList tasks={tasks} />}
       {isLoading && <h2>Loading...</h2>}
      </section>
  </>)
}