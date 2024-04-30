import '../styles/styles.css';
import { DeleteIcon } from './deleteIcon';
import { CompleteIcon } from "./completeIcon";

function TaskItem(props) {
    return (
      <li className="taskItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`taskItem-p ${props.completed && "taskItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    );
}

export { TaskItem };
