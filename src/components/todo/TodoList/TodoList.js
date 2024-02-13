import classes from "./TodoList.module.css";
import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList({ tasks, updateTask, deleteTask }) {

    const onTickHandler = (id, checked) => {
        updateTask(id, { isDone: checked.toString() });
    }
    const onDeleteHandler = (id) => {
        deleteTask(id);
    }
    return (
        <ul className={classes.container}>

            {tasks.map(({ id, isDone, importance, title }) => {
                return <TodoListItem key={id}
                    id={id}
                    importance={importance}
                    isDone={isDone}
                    onTick={onTickHandler}
                    onDelete={onDeleteHandler}>{title}</TodoListItem>
            }
            )}
        </ul>
    )
}