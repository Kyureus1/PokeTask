import '../styles/styles.css';

function TaskList({children}) {
    return (
      <ul className='taskList'>
        {children}
      </ul>
    );
}

export { TaskList };