import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        
        <div
          onClick={() => toggleComplete(task.id)}
          style={{
            height: '16px',
            width: '16px',
            borderRadius: '50%',
            border: '2px solid #555',
            backgroundColor: task.completed ? '#4caf50' : 'transparent',
            cursor: 'pointer',
            transition: '0.2s',
          }}
          title="Mark as completed"
        ></div>

        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          style={{
            margin: 0,
            textDecoration: task.completed ? "line-through" : "none",
            fontSize: '16px'
          }}
        >
          {task.task}
        </p>
      </div>

      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};
