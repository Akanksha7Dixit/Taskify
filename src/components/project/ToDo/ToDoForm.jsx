import { useState } from "react";

export const ToDoForm=()=>{

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (value) => {
        setInputValue(value);
    };

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
    )
}