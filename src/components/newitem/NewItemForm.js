import { useState } from "react";
import classes from './NewItemForm.module.css';

export const getImportance = (priority) => {
    if (priority === 'low') {
        return 2;
    }
    if (priority === 'medium') {
        return 1;
    }
    return 0;
}
export default function NewItemForm({ onSubmit, onCancel }) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('medium');
    const formIsValid = () => {
        return title.trim().length > 0 &&
            ['low', 'medium', 'high'].includes(priority);
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        if (formIsValid()) {
            onSubmit({ importance: getImportance(priority), title });
        }

    }
    const onTitleChangeHandler = (event) => {
        const value = event.target.value;
        if (value.trim().length > 0) {
            setTitle(value);
        }
    }
    const onPriorityChangeHandler = (event) => {
        const value = event.target.value;
        setPriority(value);
    }

    return (
        <form className={classes.form} onSubmit={submitFormHandler} aria-labelledby='form-title'>
            <label htmlFor='title' id='form-title'>Title:</label>
            <input type="text"
                onChange={onTitleChangeHandler} id='title' tabIndex='0' />
            <label htmlFor="priority" id="priority">Priority:</label>
            <select className={priority}
                onChange={onPriorityChangeHandler}
                defaultValue='medium'
                aria-labelledby='priority-label'
                id="priority">
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select>
            <div className={classes.buttonContainer}>
                <button type='button' onClick={onCancel} aria-label="Cancel">Cancel</button>
                <button type='button' onClick={submitFormHandler} aria-label="Add">Add</button>
            </div>
        </form>
    )
}