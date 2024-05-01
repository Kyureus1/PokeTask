import '../styles/styles.css';

function TaskDiv( { children }) {
    return (
        <div className='TaskDiv'>
            { children }
        </div>
    )
}

export { TaskDiv };