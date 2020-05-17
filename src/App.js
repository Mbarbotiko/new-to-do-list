import React, {Component} from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';
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


      </div>
    )
  }

}

export default App;
