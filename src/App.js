import './App.css'
import React, { useEffect, useState } from "react";
import TodoList from "./components/todo/TodoList/TodoList";
import AddItemButton from "./components/UI/AddItemButton";
import { fetchTasks, updateTask, addTask ,deleteTask} from './comms/CommsManager';
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
    await updateTask(id, data);
    setTaskIsDone(id, data.isDone);
  }
  const newTaskHandler = async (data) => {
    await addTask(data);
    setAddingNewTask(false);
    getTasks();
  }
  const deleleTaskHandler = async(id)=>{
    await deleteTask(id);
    getTasks();    
  }

  const buttonClickHandler = () => {
    setAddingNewTask(true)
  }
  const cancelNewTaskHandler = () => {
    setAddingNewTask(false);
  }
  const setTaskIsDone = (id, isDone) => {
    setTasks(tasks.map(task =>{
      if(task.id === id){
        return {  
          ...task,
          isDone
        };
      }
      return task;    
    }));
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
          {!isLoading && <TodoList tasks={tasks} updateTask={updateTaskHandler} deleteTask={deleleTaskHandler} />}
          {isLoading && <h2>Loading...</h2>}
        </section>
      </>
    
    {addingNewTask && <section>
     
    </section>
    }
  </>)
}