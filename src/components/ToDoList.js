import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import SubmitButton from './SubmitButton';
import './ToDoList.scss';

class ToDoList extends Component {
    state = {
        toDoItems: JSON.parse(localStorage.getItem('ToDoList')) || []
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
    removeToDoItem = (id) => {
        const toDoItems = this.state.toDoItems.filter(todo => todo.id !== id)
        this.setState({
            toDoItems,
        })
        localStorage.setItem('ToDoList', JSON.stringify(toDoItems));
    }
    render() {
        //conditional rendering and assigning a component to a variable
        let forgetListButton = null;
        if (this.state.toDoItems.length > 0) {
            forgetListButton = <SubmitButton submitClick={this.removeLocalStorage}
                submitButtonText='Forget My List' />
        }
        return (
            <div className='List'>
                <ToDoInput onSubmit={this.submitToDoItem} />
                {this.state.toDoItems.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        item={todo.inputValue}
                        pixabayImage={todo.image}                        removeItem={this.removeToDoItem.bind(this, (todo.id))}
                    />
                ))
                }
                <div className='Forget'>
                    {forgetListButton}
                </div>
            </div>

        )
    }
}

export default ToDoList;