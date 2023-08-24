import { useState } from "react";

function TaskCreate({onCreate}) {

    const [title, setTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }

    return ( 
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
     );
}

export default TaskCreate;