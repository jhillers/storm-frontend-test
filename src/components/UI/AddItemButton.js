import PlusIcon from './plus.svg';

export default function AddItemButton({clickHandler}) {
    return (
        <button onClick={clickHandler} className="add-button">
            <img src={PlusIcon} alt="plus icon" />
            Add Item
        </button>
    );
};