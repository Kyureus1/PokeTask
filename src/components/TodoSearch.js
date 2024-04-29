import React from 'react';
import '../styles/styles.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
      className='TodoSearch' 
      placeholder="Correr 200 millas"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    >       
    </input>
  );
}

export { TodoSearch };