import React from 'react';
import  '../components/Tooltip.scss';

const Tooltip = (props) => {
    return (
        <>
            <span className={`Tooltip ` + props.isActive}
            >{props.alertText}</span>

        </>
    )

}

export default Tooltip;