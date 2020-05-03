import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';


class ToDoList extends React.Component {


    state = {
        toDoItems: []

    }

    submitToDoItem = (addToDoItem) => {
        const toDoItems = [addToDoItem, ...this.state.toDoItems];
        this.setState({
            toDoItems,
        })

    }

    render() {
   
        console.log(this.state.toDoItems)
        return (
        
            <div>
                <ul className='List'>
                    <h3>My to do's</h3>

                    {
                     this.state.toDoItems.map(todo => (
                 
                        <ToDoItem
                          key = {todo.id}
                          item={todo.inputValue}


                        >

                        </ToDoItem>
                    ))
                }


                </ul>
                <ToDoInput onSubmit={this.submitToDoItem} />
            </div>
        )
    }
}

export default ToDoList;