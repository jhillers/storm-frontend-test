import './App.css'
import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList/TodoList";
import AddItemButton from "./components/UI/AddItemButton";
import { fetchTasks, updateTask } from './comms/CommsManager';
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async () => {
    setIsLoading(true);
    const json = await fetchTasks();
    setIsLoading(false);
    setTasks(json);
  }
  const updateTaskHandler = (id, data)=>{
    const response = updateTask(id,data);
    console.log(response);
  }
  useEffect(() => {
    getTasks();
  }, []);

  return (<>
    <div className="mainContent">
      <h1>Todo list</h1>
      <AddItemButton />
    </div>
    <section>
      {!isLoading && <TodoList tasks={tasks} updateTask={updateTaskHandler}/>}
      {isLoading && <h2>Loading...</h2>}
    </section>
  </>)
}