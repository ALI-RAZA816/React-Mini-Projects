import react, { useState } from "react";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState(' ');

    const addTask = () => {
        if (value.trim()) {
            setTasks([...tasks, value]);
        }
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        console.log(newTasks);
        setTasks(newTasks);
    };

    return (
        <>
            <div className="container justify-content-center py-3">
                <h1 className="my-5">Task List Manager</h1>
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <input type="text" placeholder="Enter task..." onChange={(event) => setValue(event.target.value)} className="form-control" id="taskField" />
                        <button className="btn btn-primary" onClick={addTask} id="taskBtn">Add Task</button>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12">
                        <ul id="tasRenderList" className="py-3">
                            {tasks.map((tasks, index) => (
                                <li className="my-2" key={index}>
                                    <span>{index + 1}. {tasks}</span>
                                    <button className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                                </li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskManager;