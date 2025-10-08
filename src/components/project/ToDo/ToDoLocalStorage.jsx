const todoKey="myToDoList";

export const getLocalStorageToDoData=()=>{
    const rawToDos=localStorage.getItem(todoKey);
    if(!rawToDos) return [];
    return JSON.parse(rawToDos);
};

export const setLocalStorageToDoData=(task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task));
};