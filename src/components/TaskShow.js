import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({task, onTaskDelete, onUpdate}) {
    
    const [showEdit, setShowEdit] = useState(false);

    const TaskDeleteClick = () => {
        onTaskDelete(task.id);
    }

    const TaskUpdateClick = () => {
        setShowEdit(!showEdit);
    }

    const taskGuncelle = (id, title, taskDesc) => {
        setShowEdit(!showEdit);
        onUpdate(id, title, taskDesc);
    }

    return ( 
        <div className="TaskShowDiv">
            {showEdit ? (
                <TaskCreate task={task} taskFormUpdate={showEdit} onUpdate={taskGuncelle}/>
             ) : (
                <div>
                    <h3>Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3>Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>            

                    <div>
                        <button className="TaskShowDelete" onClick={TaskDeleteClick}>Sil</button>
                        <button className="TaskShowUpdate" onClick={TaskUpdateClick}>Güncelle</button>
                    </div>
                </div>
             )
            }            
        </div>
     );
}

export default TaskShow;