import React from 'react';
import { EmptyTodos } from './EmptyTodos';
import { CreateTodoButton } from './TodoButton';
import { Modal } from './Modal';
import { TodoContext } from './TodoContext';
import { TodoCount } from './TodoCount';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodosError } from './TodosError';
import { TodosLoading } from './TodosLoading';
import { Title } from './title';
import { TodoForm } from './TodoForm';

function AppUI() {
  
  const {
    loading,
    error,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
      <>
        <Title/>
        <TodoCount/>
        <TodoSearch/>

        <TodoList>
          {loading && <TodosLoading/>}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </>
    );
}

export { AppUI };
