import React from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <ul className='List'>
                    <h3>My To Do's</h3>
                    <ToDoItem item='hello' />
                    <ToDoItem item='hello' />
                    <ToDoItem item='hello' />
                    <ToDoItem item='hello' />
                </ul>
            </div>
        )
    }
}

export default ToDoList;