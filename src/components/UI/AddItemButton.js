import PlusIcon from './plus.svg';

export default function AddItemButton() {
    return (
        <button className="add-button">
            <img src={PlusIcon} alt="plus icon" />
            Add Item
        </button>
    );
};