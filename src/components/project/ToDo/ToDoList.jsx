import { MdCheck, MdDeleteForever } from "react-icons/md";

export const ToDoList = ({data,checked, onHandleDeleteToDo , onHandleCheckedToDo}) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=>onHandleCheckedToDo(data)}>
                <MdCheck /></button>
            <button className="delete-btn" onClick={() => 
                onHandleDeleteToDo(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
};
