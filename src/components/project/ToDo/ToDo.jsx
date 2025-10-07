import "./ToDo.css";
import { useState} from "react";
import { MdCheck } from "react-icons/md";
import  { ToDoForm } from "./ToDoForm";
import { ToDoDate } from "./ToDoDate"; 
import  { ToDoList }  from "./ToDoList";

export const ToDo = () => {
    const [task, setTask] = useState([]);

    //handle form submit
    const handleFormSubmit = (inputValue) => {
        const{id,content, checked}=inputValue;
        //to check if the input field is empty or not.
        if (!content) return;
        //to check of the data is already existing or not.
        // if (task.includes(inputValue)) return;

        const ifToDoContentMatched= task.find((curTask)=>curTask.content===content);
        if(ifToDoContentMatched) return;

        setTask((prevTask) => [...prevTask, {id, content,checked}]);
    };

    //todo Date Time:in the seperate component

    //handle delete btn
    const handleDeleteToDo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };
    //handle checked btn  functionality
    const handleCheckedToDo = (content) =>{
        const updatedTask = task.map((curTask) => {
            if(curTask.content===content){
                return {...curTask, checked: !curTask.checked};
            }
            else{
                return curTask;
            }
        });
        setTask(updatedTask);
    };

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List <MdCheck /></h1>
                <ToDoDate />
            </header>
            <ToDoForm onAddToDo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <ToDoList 
                            key={curTask.id} 
                            data={curTask.content} 
                            checked = {curTask.checked}
                            onHandleDeleteToDo={handleDeleteToDo}
                            onHandleCheckedToDo={handleCheckedToDo}
                            />
                        );
                    })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={() => setTask([])}>Clear All</button>
            </section>
        </section>
    );
};