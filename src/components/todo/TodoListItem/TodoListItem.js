import classes from "./TodoListItem.module.css";
import React from "react";
import DeleteIcon from './img/delete.svg';

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
    const { importance, onTick, onDelete } = props;
    const priority = getPriority(importance);
    const isChecked = props.isDone === "true"
    const className = `${classes.item} ${priority}
                       ${classes[isChecked ? 'selected' : 'unselected']}`;
    const onChangeHandler = (event) => {
        onTick(props.id, event.target.checked);
    }
    const deleteButtonHandler = () => {
        if (window.confirm("Are you sure?") === true) {
            onDelete(props.id);
        }
    }
    return (
        <li className={className}>
            <form>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={onChangeHandler} id={props.children} />
                <label htmlFor={props.children}>{props.children}</label>
                <button onClick={deleteButtonHandler}>
                    <img src={DeleteIcon} alt="delete item"></img>
                </button>
            </form>
        </li>

    )
}