import React from 'react';
import { EmptyTasks } from './EmptyTasks';
import { CreateTaskButton } from './TaskButton';
import { Modal } from './Modal';
import { TaskContext } from './TaskContext';
import { TaskCount } from './TaskCount';
import { TaskItem } from './TaskItem';
import { TaskList } from './TaskList';
import { TaskSearch } from './TaskSearch';
import { TasksError } from './TasksError';
import { TasksLoading } from './TasksLoading';
import { Title } from './title';
import { TaskForm } from './TaskForm';

function AppUI() {
  
  const {
    loading,
    error,
    searchedtasks, 
    completetask, 
    deletetask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);

  return (
      <>
        <Title/>
        <TaskCount/>
        <TaskSearch/>

        <TaskList>
          {loading && <TasksLoading/>}
          {error && <TasksError/>}
          {(!loading && searchedtasks.length === 0) && <EmptyTasks/>}
          {searchedtasks.map(task => (
            <TaskItem 
            key = {task.text} 
            text = {task.text}
            completed = {task.completed}
            onComplete = {() => completetask(task.text)}
            onDelete = {() => deletetask(task.text)}
            />
          ))}
        </TaskList>
  
        <CreateTaskButton
        setOpenModal={setOpenModal}
        />
        {openModal && (
          <Modal>
            <TaskForm/>
          </Modal>
        )}
      </>
    );
}

export { AppUI };
