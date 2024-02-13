import classes from "./TodoListItem.module.css";
import React from "react";

export const getPriority = importance => {
    let priority = 'low'
    if (importance === 0) {
        priority = 'high';
    }
    else if (importance === 1) {
        priority = 'medium';
    }
    return priority;
}

export default function TodoListItem(props) {
    const { importance } = props;
    const priority = getPriority(importance);
    const className = `${classes.item} ${classes[priority]}`;
   
    return (
        <li className={className}>
           <form>
           <input type="checkbox"
            onChange={()=>props.onTick(props.id)} id={props.children} />
            <label htmlFor={props.children}>{props.children}</label>
           </form>
        </li>

    )
}