import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider({ children }) {
    const {item: tasks, saveItem: savetasks, loading, error} = useLocalStorage('taskS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedtasks = tasks.filter(
        task => !!task.completed
    ).length;

    const totaltasks = tasks.length;

    const searchedtasks = tasks.filter(
        (task) => {
        const taskText =task.text.toLowerCase();
        const taskFilter = searchValue.toLowerCase();
        return taskText.includes(taskFilter);
        }
    );

    const addtask = (text) => {
        const newtasks = [...tasks];
        newtasks.push( {
            text,
            completed: false,
        } );
        savetasks(newtasks);
    };

    const completetask = (text) => {
        const newtasks = [...tasks];
        const taskIndex = newtasks.findIndex(
        (task) =>
            task.text === text
        );
        newtasks[taskIndex].completed = true;
        savetasks(newtasks);
    }

    const deletetask = (text) => {
        const newtasks = [...tasks];
        const taskIndex = newtasks.findIndex(
        (task) =>
            task.text === text
        );
        newtasks.splice(taskIndex, 1);
        savetasks(newtasks);
    }
    return (
        <TaskContext.Provider value={{
            loading,
            error,
            completedtasks, 
            totaltasks, 
            searchedtasks, 
            completetask, 
            deletetask, 
            setSearchValue,
            searchValue,
            openModal,
            setOpenModal,
            addtask,
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider };