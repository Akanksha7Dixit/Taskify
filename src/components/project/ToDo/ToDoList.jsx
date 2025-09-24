import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({data, onHandleDeleteToDo}) => {
    return (
        <li className="todo-item">
            <span>{data}</span>
            <button className="check-btn"><MdCheck /></button>
            <button className="delete-btn" onClick={() => 
                onHandleDeleteToDo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
};