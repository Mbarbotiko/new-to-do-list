import React from 'react';
import  './ToDoItem.scss';
//import toDoImage from './images/testImage.jpg'
//https://reactjs.org/docs/fragments.html';

const ToDoItem = (props) => {

    return (

        // <></>
        <div className='Todo-card'>
            <div><img src={props.pixabayImage} alt='someImagefromAPI'/></div>
            <div onClick={props.edit}><p>{props.item}</p></div>
            <div><span onClick={props.removeItem}>X</span></div>

            {/* <li onClick={props.edit}>{props.item}</li><button onClick={props.removeItem}>X</button> */}
        </div>

    )

}

export default ToDoItem;