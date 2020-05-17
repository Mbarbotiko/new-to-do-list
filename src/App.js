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
       {/* <div className = 'shadow'/> */}
          <h1>Margarita's</h1>
          <h1>To Do List</h1>
          <h3>What's On The Agenda?</h3>
        </header>
        <ToDoList />
        <footer className='App-footer'>
          <h2>place forget list here</h2>
        </footer>


      </div>
    )
  }

}

export default App;
