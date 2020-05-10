import React from 'react';

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