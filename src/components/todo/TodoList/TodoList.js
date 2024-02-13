import classes from "./TodoList.module.css";
import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList({ tasks, updateTask }) {

    const onTickHandler = (id, checked) => {
        updateTask(id, {isDone: checked.toString() });
    }
    return (
        <ul className={classes.container}>

            {tasks.map(({ id, isDone, importance, title }) => {
                return <TodoListItem key={id}
                    id={id}
                    importance={importance}
                    isDone={isDone}
                    onTick={onTickHandler}>{title}</TodoListItem>
            }
            )}
        </ul>
    )
}