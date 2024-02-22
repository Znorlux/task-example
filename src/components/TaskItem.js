import React from 'react';

function TaskItem({ task }) {
    return (
        <div>
            <input type="checkbox" /> {task}
        </div>
    );
}

export default TaskItem;
