import React from 'react';
import '../styles/styles.css';

function TodosLoading() {
  return (
    <div className="loadingImg">
        <img src={require('../assets/load.gif')} alt='Loading...'></img>
    </div>
  );
}

export { TodosLoading };