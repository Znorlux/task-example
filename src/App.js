import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);

    // Función para agregar una nueva tarea
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            {tasks.map((task, index) => ( 
                <TaskItem key={index} task={task} /> 
            ))}
            <TaskForm onAddTask={addTask} />
        </div>
    );
}

export default App;
