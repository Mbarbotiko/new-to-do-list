import React, { Component } from 'react';
import shortid from 'shortid';
import Tooltip from './Tooltip';
import SubmitButton from './SubmitButton';
import './ToDoInput.scss';
import failedImage from './images/imageAPIfail.jpg'
const PIXABAY = `${process.env.REACT_APP_PIXABAY_API_KEY}`
const URL = `https://pixabay.com/api/?key=${PIXABAY}`
//&q=coffee&image_type=photo`

const toolTipMessages = {
    notEnough: 'You need to enter something...',
    tooMany: 'Whoa, this is a simple to do list not a novel....remove some text'

}

class ToDoInput extends Component {
    state = {
        inputValue: '',
        tooltip: 'invisible',
        tooltipText: '',
        image: ''

    }

    randomImage = (min, max) => {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        //10 - 0 + 1 = 11 + 0 = 11
        return num;
    }

    // testFetchCall = async (someQueryHere) => {
    //     await fetch(someQueryHere)
    //         .then(response => response.json())
    //         .then(data => {
    //             const first = 0;
    //             const last = data.hits.length - 1;
    //             const someRandomImage = this.randomImage(first, last)
    //             // this.setState({
    //             //   test: data.hits[0].previewURL
    //             // })

    //             //check on this, pulled up an error
    //             this.setState({
    //                 image: data.hits[someRandomImage].previewURL

    //             })
    //             console.log(this.state.image)
    //         })

    // }

    // componentDidMount() {
    //     this.testFetchCall('&q=coffee&image_type=photo');
    //     console.log('fetched')

    //   }

    handleChange = (event) => {
        const userInput = event.target.value;
        const tooltipState = this.state.tooltip;
        //here also do not allow more than 100 characters and trigger alert
        this.setState({
            inputValue: userInput
        })
        //remove the tool tip if user has entered something into the field after attempting to submit an empty string
        if (userInput.length === 1 && tooltipState === 'visible') {
            this.setState({
                tooltip: 'invisible'
            })
        }

        if (userInput.length >= 30 && tooltipState === 'invisible') {
            //if length of string with white space is 30 show the alert
            this.setState({
                tooltip: 'visible',
                tooltipText: toolTipMessages.tooMany
            })
        }

        if (userInput.length <= 30 && tooltipState === 'visible') {
            this.setState({
                tooltip: 'invisible'
            })
        }
    }


    neatMySentence = (sentence) => {
        return sentence.substring(0, 1).toUpperCase() + sentence.substring(1).toLowerCase();
        //create a reusable method to make sentences/ to dos neat before sending
    }

    //Play with ternary operator instead
    //onsubmit the tool tip should remain on the screen until a valid entry is made, it is currently being made invisible on submit
    handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedState = this.state.inputValue.trim();
        const lengthIsThere = trimmedState.length >= 1;
        const lengthIsOk = trimmedState.length <= 30;
        //  const novel = trimmedState.length>30;
        if (lengthIsThere && lengthIsOk) {
            //if atleast 1 character is in the field after trimming, and there are 30 characters or less submit the form
            const queryString = trimmedState.replace(/ /g, '+')
            const queryURL = URL + `&q=${queryString}&image_type=photo`
            // this.testFetchCall(queryURL);
            // console.log(queryURL)
            await fetch(queryURL)
            
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                  
                    const first = 0;
                    const last = data.hits.length - 1;
                    const someRandomImage = this.randomImage(first, last)
                    // this.setState({
                    //   test: data.hits[0].previewURL
                    // })

                    //check on this, pulled up an error
                    this.setState({
                        image: data.hits[someRandomImage].previewURL

                    })
                    console.log(this.state.image)
                })

            this.props.onSubmit({
                id: shortid.generate(),
                inputValue: this.neatMySentence(trimmedState),
                image: this.state.image
                //this is happening after submit, create a call to wait
            })
            this.setState({
                inputValue: ''
            })

            this.setState({
                tooltip: 'invisible',
                tooltipText: ''
            })
        } else {
            //if the length of the field trimmed is 0 

            if (trimmedState.length === 0) {
                const toolTip = 'visible'
                const toolTipText = toolTipMessages.notEnough;
                this.setState({
                    tooltip: toolTip,
                    tooltipText: toolTipText
                })

            }

            if (trimmedState.length > 30) {
                const toolTip = 'visible'
                const toolTipText = toolTipMessages.tooMany;
                this.setState({
                    tooltip: toolTip,
                    tooltipText: toolTipText
                })

            }



            //if visible set to invisible only if there is length to the input field (adjust this)


            // this.setState({
            //     tooltip: lengthIsOk ? 'invisible' : 'visible',
            //     tooltipText: toolTipMessages.tooMany
            // })


        }



    }

    render() {
        return (
            <div className='Input' >
                {/* <img src={this.state.image} /> */}
                <form>
                    <input
                        type='text'
                        minLength='1'
                        maxLength='31'
                        placeholder='What to Do?'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    ></input>
                    {/* <button onClick={this.handleSubmit}
                    

                    >Add to List</button> */}
                    <SubmitButton submitButtonText='Add to List'
                        submitClick={this.handleSubmit} />
                </form>
                <Tooltip
                    isActive={this.state.tooltip}
                    alertText={this.state.tooltipText}

                />
            </div>
        )

    }
}
export default ToDoInput;