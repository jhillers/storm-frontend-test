import React from "react";

import TodoListItem from "./TodoListItem";

export default function TodoList({tasks}) {  
    
    return (
        <ul>
            {tasks.map((task)=>{
                return <TodoListItem key={task.id}>{task.title}</TodoListItem>
            }         
            )}
        </ul>
    )
}