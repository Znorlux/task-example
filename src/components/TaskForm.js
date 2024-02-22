import React, { useState } from 'react';

function TaskForm({ onAddTask }) {

    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => { //El parametro evento que recibimos es un objeto que representa un evento en React e  
         setNewTask(event.target.value);//incluye una propiedad llamada target, que representa el elemento del DOM que disparó el evento.
        //event.target.value contiene el valor actual del campo de entrada.
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // evita que el navegador recargue la página cuando se envía el formulario
        if (newTask.trim()) { //comprobamos que no esté vacio
            onAddTask(newTask);//llama a la funcion pasada como prop y le pasa la nueva tarea ingresada por el usuario
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={handleChange}
                placeholder="Nueva tarea"
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}

export default TaskForm;
