import React from 'react';
import  './ToDoItem.scss';
//https://reactjs.org/docs/fragments.html';

const ToDoItem = (props) => {

    return (

        // <></>
        <div>
            <li onClick={props.edit}>{props.item}</li><button onClick={props.removeItem}>X</button>
        </div>

    )

}

export default ToDoItem;