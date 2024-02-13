import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList";

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

  return (<TodoList tasks={tasks} />)
}