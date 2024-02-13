import classes from "./TodoList.module.css";
import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList({ tasks }) {
    const onTickHandler = (item) => {
        console.log('Tick', item)
    }
    return (
        <ul className={classes.container}>

            {tasks.map((task) => {
                return <TodoListItem key={task.id}
                    id={task.id}
                    importance={task.importance}
                    onTick={onTickHandler}>{task.title}</TodoListItem>
            }
            )}
        </ul>
    )
}