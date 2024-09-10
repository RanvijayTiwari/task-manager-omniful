// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            dispatch(addTask({ id: Date.now(), name: taskName }));
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
