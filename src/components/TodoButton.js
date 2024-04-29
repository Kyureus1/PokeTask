import '../styles/styles.css';

function CreateTodoButton( { setOpenModal} ) {
    return(
        <button 
        className='add-button' 
        onClick={() => {
            setOpenModal(state => !state);
        }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg' alt='pokeball-icon'></img>
        </button>
    );
}

export { CreateTodoButton };