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

    removeToDoItem = (id) => {
        let toDoItems = [];
        this.state.toDoItems.forEach(todo => {
            if (todo.id !== id) {
                toDoItems.push(todo);
            }
        })
        this.setState({
            toDoItems,
        })
    }

    render() {

        return (
            <div>
                <ul className='List'>
                    <h3>My to do's</h3>
                    {this.state.toDoItems.map(todo => (
                        <ToDoItem
                            key={todo.id}
                            item={todo.inputValue}
                            removeItem={() => this.removeToDoItem(todo.id)}
                        />
                    ))
                    }
                </ul>
                <ToDoInput onSubmit={this.submitToDoItem} />
            </div>
        )
    }
}

export default ToDoList;