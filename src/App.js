import React, { Component } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList';
//import SubmitButton from './components/SubmitButton';
import { ReactComponent as Pixabay } from './components/images/pixabay.svg';
//https://pixabay.com/api/docs/
//https://jestjs.io/

const PIXABAY = `${process.env.REACT_APP_PIXABAY_API_KEY}`



//example

const URL = `https://pixabay.com/api/?key=${PIXABAY}&q=yellow+flowers&image_type=photo`


// fetch(URL)
// .then(response=>response.json())
// .then(data=>console.log(data.hits[0].previewURL))






/*
// svg g{
//   fill:white;
// }

svg path{
  fill:white;
}

Can access svg color props with g or path in css:


or create a component:

        const MenuIcon = (props) =>(
            <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
            )

            Note this approach only works with create-react-app, If you are not using create-react-app, I would recommend using other approaches. Create-react-app uses SVGR under the hood to make it possible to transform and import SVG as a React component.



*/


class App extends Component {
  state = {
    test: ''
  }

  randomImage = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    //10 - 0 + 1 = 11 + 0 = 11
    return num;
  }
//add a param later for the search string right now just testing using hard coded query string
  testFetchCall = (someQueryHere) => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const first = 0;
        const last = data.hits.length - 1;
        const someRandomImage = this.randomImage(first, last)
        // this.setState({
        //   test: data.hits[0].previewURL
        // })

        this.setState({
          test: data.hits[someRandomImage].previewURL
        })
      })

  }

  componentDidMount() {
    this.testFetchCall();

  }

  render() {



    return (
      <div className="App">
        <header className="App-header">
          {/*   
          <h1>Margarita's</h1> */}
          <h1>To Do List</h1>
          {/* <h3>What's On The Agenda?</h3> */}
          <img src={this.state.test} />
        </header>
        <ToDoList />
        <footer className='App-footer'>
          {/* <h2>Forget My List</h2> */}
          {/* {forgetListButton} */}
          <a href='https://pixabay.com' target='_blank'>
            <Pixabay alt='pixabay.com logo' rel="noopener noreferrer" />


          </a>
        </footer>
      </div>
    )
  }

}

export default App;
