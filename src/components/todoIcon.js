import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import '../styles/styles.css';

const iconTypes = {
    "check": (color) => <BsFillCheckCircleFill className="Icon-svg" fill={color}/>,
    "delete": (color) => <BiX className="Icon-svg" fill={color}/>,
};

function TodoIcon ({ type, color, onClick }) {
    return (
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
