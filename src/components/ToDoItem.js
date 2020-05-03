import React from 'react';
//https://reactjs.org/docs/fragments.html';

const ToDoItem = (props) => {

    return (
          <React.Fragment>
        
            <li>{props.item}</li><button>X</button>
        

          </React.Fragment>
    )

}

export default ToDoItem;