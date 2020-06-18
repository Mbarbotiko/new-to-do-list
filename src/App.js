import React, { Component } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';
import { ReactComponent as Pixabay } from './components/images/pixabay.svg';
//https://pixabay.com/api/docs/
//https://jestjs.io/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>
        <ToDoList />
        <footer className='App-footer'>
          <a href='https://pixabay.com' target='_blank'>
            <Pixabay alt='pixabay.com logo' rel="noopener noreferrer" />
          </a>
        </footer>
      </div>
    )
  }
}

export default App;
