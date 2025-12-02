import React from 'react';

const Task = (props) => {
  let bgColor;
  if (props.done) {
    bgColor = 'lightgrey';
  } else {
    switch (props.priority) {
      case 'High':
        bgColor = '#e74c3c'; // red
        break;
      case 'Medium':
        bgColor = '#f39c12'; // orange
        break;
      case 'Low':
        bgColor = '#27ae60'; // green
        break;
      default:
        bgColor = '#5bb4c4'; // fallback
    }
  }

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p>{props.description}</p>
      <p>Priority: {props.priority}</p>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  )
}

export default Task;
