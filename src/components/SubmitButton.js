import React from 'react';
import  './SubmitButton.scss';

const SubmitButton = (props) => {
    return (
        <>
            <button
                className='SubmitButton'
                onClick={props.submitClick
                }>{props.submitText}</button>
        </>
    )
}

export default SubmitButton;