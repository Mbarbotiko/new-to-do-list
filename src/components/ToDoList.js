import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from'./ToDoInput';

class ToDoList extends React.Component {

    state = {
        toDoItems: []

    }


    render() {
        return (
            <div>
                <ul className='List'>
                    <h3>My to do's</h3>
                    <ToDoItem item = 'test'/>
                </ul>
                <ToDoInput/>
            </div>
        )
    }
}

export default ToDoList;