import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
      const createdTask = [
        ...tasks, {
          id : Math.round(Math.random()*999999),
          title,
          taskDesc
        }
      ];

      setTasks(createdTask);
  }

  const deleteTaskById = (id) => {
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTask);
  }

  const editTaskById = (id, title, taskDesc) => {    
    const updatedTask = tasks.filter((task) => {
        if (task.id === id)
        {
          task.title = title;
          task.taskDesc = taskDesc;
          
          return task;
        }
        return task;
    });
    setTasks(updatedTask);
  }

  return (
    <div className="App">
        <TaskCreate onCreate={createTask}/>
        <h1>Görevler</h1>
        <TaskList tasks={tasks} onTaskDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
