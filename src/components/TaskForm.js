import React from "react";
import '../styles/styles.css';
import { TaskContext } from './TaskContext';

function TaskForm() {
    const {
        addtask,
        setOpenModal,
    } = React.useContext(TaskContext);
    const [newtaskValue, setNewtaskValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addtask(newtaskValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewtaskValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return (
        <form id="taskForm" onSubmit={onSubmit}>
            <label>Add a new Poketask!</label>
            <textarea
            placeholder="Catch a Rayquaza"
            value={newtaskValue}
            onChange={onChange}
            />
            <div className="taskForm-buttonContainer">
            <button 
            className="taskForm-button taskForm-button--add" 
            type="submit"
            >Add</button>
            <button 
            className="taskForm-button taskForm-button--cancel"
            type="button"
            onClick={onCancel}
            >Cancel</button>
        </div>
        </form>
    )
}

export { TaskForm };