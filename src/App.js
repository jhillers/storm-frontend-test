import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList";
import './App.css'
export default function App() {
  const [tasks, setTasks] = useState([])
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:4000/api/task', {
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    const json = await response.json();
    setTasks(json);
  }
  useEffect(() => {
    fetchTasks();
  }, []);

  return (<>
    <div className="mainContent">
        <h1>Todo list</h1>
        <button>Add item</button>
      </div>
      <section>
        <TodoList tasks={tasks} />
      </section>
  </>)
}