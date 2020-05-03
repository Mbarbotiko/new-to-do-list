import React from 'react';

const ToDoInput = (props) => {
    return (
        <div className='Input'>
            <form>
                <input placeholder='What to do?'></input>
                <button>Add to List</button>
            </form>


        </div>
    )
}

export default ToDoInput;