import PlusIcon from './plus.svg';

import classes from './AddItemButton.module.css';
export default function AddItemButton({clickHandler}) {
    return (
        <button className={classes.addButton}onClick={clickHandler}>
            <img src={PlusIcon} alt="plus icon" />
            Add Item
        </button>
    );
};