import './App.css'
import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList/TodoList";
import AddItemButton from "./components/UI/AddItemButton";
import { fetchTasks, updateTask, addTask } from './comms/CommsManager';
import NewItemForm from './components/newitem/NewItemForm';
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addingNewTask, setAddingNewTask] = useState(false);

  const getTasks = async () => {
    setIsLoading(true);
    const json = await fetchTasks();
    setIsLoading(false);
    setTasks(json);
  }
  const updateTaskHandler = async (id, data) => {
    const response = await updateTask(id, data);
    getTasks();
    console.log(response);
  }
  const newTaskHandler = async (data) => {
    const response = await addTask(data);
    setAddingNewTask(false);
    getTasks();
    console.log(response);
  }

  const buttonClickHandler = () => {
    setAddingNewTask(true)
  }
  const cancelNewTaskHandler = () => {
    setAddingNewTask(false);
  }
  useEffect(() => {
    getTasks();
  }, []);

  return (<>

      <>
        <div className="mainContent">
          <h1>{!addingNewTask ? 'Todo list' : 'New Item'}</h1>
          {!addingNewTask && <AddItemButton clickHandler={buttonClickHandler} />}
        </div>
        <section>
          {addingNewTask &&  <NewItemForm onCancel={cancelNewTaskHandler} onSubmit={newTaskHandler} />}
          {!isLoading && <TodoList tasks={tasks} updateTask={updateTaskHandler} />}
          {isLoading && <h2>Loading...</h2>}
        </section>
      </>
    
    {addingNewTask && <section>
     
    </section>
    }
  </>)
}