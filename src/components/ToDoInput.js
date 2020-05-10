import React from 'react';
import shortid from 'shortid';



class ToDoInput extends React.Component {
    state = {
        inputValue: ''
    }
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue.length > 0) {
            this.props.onSubmit({
                id: shortid.generate(),
                inputValue: this.state.inputValue
            })
            this.setState({
                inputValue: ''
            })
        } else {
            //add tool tip here later instead
            alert('You need to enter something....')


        }
    }

    render() {
        return (
            <div className='Input' >
                <form>
                    <input
                        type='text'
                        placeholder='What to do?'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    ></input>
                    <button onClick={this.handleSubmit}

                    >Add to List</button>
                </form>
            </div>
        )

    }
}
export default ToDoInput;