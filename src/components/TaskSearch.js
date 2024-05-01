import React from 'react';
import '../styles/styles.css';
import { TaskContext } from './TaskContext';

function TaskSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TaskContext);

  return (
    <input 
      className='taskSearch' 
      placeholder="Run 200 miles"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    >       
    </input>
  );
}

export { TaskSearch };