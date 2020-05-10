import React from 'react';
import shortid from 'shortid';
import Tooltip from './Tooltip';


class ToDoInput extends React.Component {
    state = {
        inputValue: '',
        tooltip: 'invisible'
    }
    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        if (event.target.value.length > 0 && this.state.tooltip === 'visible') {
            this.setState({

                tooltip: 'invisible'
            })

        }
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
            if (this.state.tooltip === 'visible') {
                this.setState({

                    tooltip: 'invisible'
                })

            }
        } else {
            //add tool tip here later instead
            // alert('You need to enter something....')
            this.setState({
                tooltip: 'visible'
            })


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
                <Tooltip
                    isActive={this.state.tooltip}

                />
            </div>
        )

    }
}
export default ToDoInput;