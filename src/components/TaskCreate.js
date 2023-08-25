import { useState } from "react";

function TaskCreate({onCreate, task, taskFormUpdate, onUpdate}) {

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (! taskFormUpdate)        
            onCreate(title, taskDesc);                    
        else 
            onUpdate(task.id, title, taskDesc);
        
        
        setTitle('');
        setTaskDesc('');
    }

    return ( 
        <div>
            {taskFormUpdate ? (
                <div className="taskUpdateDiv">
                    <h3>Lütfen Task düzenleyiniz...</h3>
                    <form className="taskCreateForm">
                        <label>Başlığı düzenleyiniz...</label>
                        <input value={title} onChange={handleChange}/>

                        <label>Task düzenleyiniz...</label>
                        <textarea rows={5} value={taskDesc} onChange={handleTaskChange}></textarea>

                        <button onClick={handleSubmit}>Düzenle</button>
                    </form>
                </div>
            ) : (
                <div className="taskCreateDiv">
                    <h3>Lütfen Task ekleyiniz...</h3>
                    <form className="taskCreateForm">
                        <label>Başlık</label>
                        <input value={title} onChange={handleChange}/>

                        <label>Task Giriniz!</label>
                        <textarea rows={5} value={taskDesc} onChange={handleTaskChange}></textarea>

                        <button onClick={handleSubmit}>Oluştur</button>
                    </form>
                </div>
            )}
        </div>    
     );
}

export default TaskCreate;