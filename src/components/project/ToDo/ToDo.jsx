import "./ToDo.css";
import { useState , useEffect } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
// import { MdDeleteForever } from "react-icons/md";
import { ToDoForm } from "./ToDoForm";


export const ToDo = () => {

    
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

    

    //todo DAte Time

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            setDateTime(`${formatedDate} - ${formatedTime} `);

        }, 1000);
        return ()=>clearInterval(interval);

    }, []);

    //handle delete btn
    const handleDeleteBtn=(value)=>{
        console.log(task);
        console.log(value);
        const updatedTask=task.filter((curTask)=>curTask!==value);
        setTask(updatedTask);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List <MdCheck /></h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>   
            <ToDoForm />        
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn"><MdCheck /></button>
                                <button className="delete-btn" onClick={()=>handleDeleteBtn(curTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={()=>setTask([])}>Clear All</button>
            </section>

        </section >
    )
};