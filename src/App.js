import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';



class App extends React.Component {




  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
        </header>
        <ToDoList />


      </div>
    )
  }

}

export default App;
