import React from 'react';
//https://reactjs.org/docs/fragments.html';

const ToDoItem = (props) => {

    return (
        //  <React.Fragment>
        <div>
            <li>{props.item}</li><button>X</button>
        </div>




        //  </React.Fragment>
    )

}

export default ToDoItem;