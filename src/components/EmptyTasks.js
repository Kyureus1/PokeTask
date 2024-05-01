import React from 'react';
import '../styles/styles.css';

function EmptyTasks() {
  return (
    <p 
    className="EmptyTaskmsg"
    >What you wanna do today? <br/> Click the pokeball to create a task</p>
  );
}

export { EmptyTasks };