import TaskShow from "./TaskShow";

function TaskList({tasks, onTaskDelete, onUpdate}) {
    return ( 
        <div className="TaskList">
            {tasks.map((task) => {
                return (
                    <TaskShow key={task.id} task={task} onTaskDelete={onTaskDelete} onUpdate={onUpdate}/>
                );
            })}
        </div>
     );
}

export default TaskList;