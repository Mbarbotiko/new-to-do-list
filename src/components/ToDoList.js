import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';



class ToDoList extends React.Component {

    state = {
        toDoItems: JSON.parse(localStorage.getItem('ToDoList'))||[]
    }
    submitToDoItem = (addToDoItem) => {
        const toDoItems = [addToDoItem, ...this.state.toDoItems];
        this.setState({
            toDoItems,
        })
        localStorage.setItem('ToDoList', JSON.stringify(toDoItems));
    }

    removeLocalStorage = () => {
        localStorage.removeItem('ToDoList');
        this.setState({
            toDoItems: []
        })
    }

    // removeToDoItem = (id) => {
    //     let toDoItems = [];
    //     this.state.toDoItems.forEach(todo => {
    //         if (todo.id !== id) {
    //             toDoItems.push(todo);
    //         }
    //     })
    //     this.setState({
    //         toDoItems,
    //     })
    // }

    removeToDoItem = (id) => {
        const toDoItems = this.state.toDoItems.filter(todo => todo.id !== id)
        this.setState({
            toDoItems,
        })
        localStorage.setItem('ToDoList', JSON.stringify(toDoItems));
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
                <button onClick={this.removeLocalStorage}>Forget My List</button>
            </div>
        )
    }
}

export default ToDoList;