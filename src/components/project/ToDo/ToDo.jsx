import "./ToDo.css";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


export const ToDo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);


    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormInput = (event) => {
        event.preventDefault();

        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue("");
    };


    return (
        <section className="todo-container">
            <header>
                <h1>To Do List <MdCheck /></h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormInput}>
                    <div>
                        <input
                            type="text"
                            className="toDo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) => {
                        return(
                        <li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <h2>hello</h2>
                            <button className="check-btn"><MdCheck /></button>
                            <button className="delete-btn"><MdDeleteForever /></button>
                        </li>
                        )
                    })}
                </ul>
            </section>

        </section >
    )
};