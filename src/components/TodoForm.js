import React from "react";
import '../styles/styles.css';
import { TodoContext } from './TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return (
        <form id="TodoForm" onSubmit={onSubmit}>
            <label>Add a new Poketask!</label>
            <textarea
            placeholder="Catch a Rayquaza"
            value={newTodoValue}
            onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
            <button 
            className="TodoForm-button TodoForm-button--add" 
            type="submit"
            >Add</button>
            <button 
            className="TodoForm-button TodoForm-button--cancel"
            type="button"
            onClick={onCancel}
            >Cancel</button>
        </div>
        </form>
    )
}

export { TodoForm };