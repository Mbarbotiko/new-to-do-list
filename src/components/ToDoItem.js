import React from 'react';
import  './ToDoItem.scss';

const ToDoItem = (props) => {
    return (
        <div className='Todo-card'>
            <div><img src={props.pixabayImage} alt='someImagefromAPI'/></div>
            <div onClick={props.edit}><p>{props.item}</p></div>
            <div><span onClick={props.removeItem}>X</span></div>
        </div>
    )
}

export default ToDoItem;