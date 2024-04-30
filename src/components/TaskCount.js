import '../styles/styles.css';
import React from 'react';
import { TaskContext } from './TaskContext';

function TaskCount() {

  const {
    completedtasks, 
    totaltasks,
  } = React.useContext(TaskContext);

  return (
    <h2 className='taskCount'><span>{completedtasks}</span> out of <span>{totaltasks}</span> tasks completed</h2>
  );
}

export { TaskCount };
