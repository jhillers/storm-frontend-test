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
        <form className={classes.form} onSubmit={submitFormHandler}>
            <label htmlFor='title'>title</label>
            <input type="text"
                onChange={onTitleChangeHandler} id='title' />
            <label htmlFor="priority">priority</label>
            <select className={priority} onChange={onPriorityChangeHandler}
                defaultValue='medium'>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
           <div className={classes.buttonContainer}>
           <button type='button' onClick={onCancel}>Cancel</button>
            <button type='button' onClick={submitFormHandler}>Add</button>
           </div>
        </form>
    )
}