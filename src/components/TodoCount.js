import '../styles/styles.css';
import React from 'react';
import { TodoContext } from './TodoContext';

function TodoCount() {

  const {
    completedTodos, 
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h2 className='TodoCount'><span>{completedTodos}</span> out of <span>{totalTodos}</span> tasks completed</h2>
  );
}

export { TodoCount };
