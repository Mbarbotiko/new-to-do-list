import React, { Component } from 'react';
import shortid from 'shortid';
import Tooltip from './Tooltip';
import SubmitButton from './SubmitButton';
import './ToDoInput.scss';


class ToDoInput extends Component {
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
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const trimmedState = this.state.inputValue.trim();
    //     if (trimmedState.length > 0) {
    //         this.props.onSubmit({
    //             id: shortid.generate(),
    //             inputValue: trimmedState
    //         })
    //         this.setState({
    //             inputValue: ''

    //         })

    //         if (this.state.tooltip === 'visible') {
    //             this.setState({
    //                 tooltip: 'invisible'

    //             })
    //         }
    //     } else {
    //         this.setState({
    //             tooltip: 'visible'
    //         })


    //     }
    // }

    neatMySentence = (sentence) => {
        return sentence.substring(0, 1).toUpperCase() + sentence.substring(1).toLowerCase();
        //create a reusable method to make sentences/ to dos neat before sending
    }

    //Play with ternary operator instead
    handleSubmit = (event) => {
        event.preventDefault();
        const trimmedState = this.state.inputValue.trim();
        const lengthIsThere = trimmedState.length > 0;
        if (lengthIsThere) {
            //if there is length
            this.props.onSubmit({
                id: shortid.generate(),
                inputValue: this.neatMySentence(trimmedState)
            })
            this.setState({
                inputValue: ''
            })
        }

        //if visible set to invisible only if there is length to the input field
        this.setState({
            tooltip: !lengthIsThere ? 'visible' : 'invisible'
        })

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
                    {/* <button onClick={this.handleSubmit}
                    

                    >Add to List</button> */}
                    <SubmitButton submitText='Add to List (test)'
                        submitClick={this.handleSubmit} />
                </form>
                <Tooltip
                    isActive={this.state.tooltip}
                    alertText='You need to enter something'

                />
            </div>
        )

    }
}
export default ToDoInput;