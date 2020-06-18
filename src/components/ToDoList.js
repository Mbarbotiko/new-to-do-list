import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import SubmitButton from './SubmitButton';
import './ToDoList.scss';
//import toDoImage from './images/testImage.jpg'
//add a tool tip to the handle submit event
//add ability to edit the current to do's displayed, onclick of the LI display an input that updates only that component, onClick= props.edit
//style this with sass, add to portfolio and move onto another project


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

    //if no arrow function, use bind(this) in the onClick, otherwise its not needed because arrow function binds this automatically.
    //   removeLocalStorage(){
    //         localStorage.removeItem('ToDoList');
    //         this.setState({
    //             toDoItems: []
    //         })
    //     }


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
        //conditional rendering and assigning a component to a variable
        console.log(this.state.toDoItems)
        let forgetListButton = null;
        if (this.state.toDoItems.length > 0) {
            forgetListButton = <SubmitButton submitClick={this.removeLocalStorage}
                submitButtonText='Forget My List' />
        }
        return (


            <div className='List'>
                <ToDoInput onSubmit={this.submitToDoItem} />
                {/* <button onClick={this.removeLocalStorage}>Forget My List</button> */}

                {this.state.toDoItems.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        item={todo.inputValue}
                        pixabayImage={todo.image}
                        //must bind when passing arguments
                        //https://reactjs.org/docs/handling-events.html
                        removeItem={this.removeToDoItem.bind(this, (todo.id))}
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