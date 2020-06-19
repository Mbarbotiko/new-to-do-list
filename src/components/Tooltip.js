import React from 'react';
import  './Tooltip.scss';

const Tooltip = (props) => {
    return (
        <>
            <span className={`Tooltip ` + props.isActive}
            >{props.alertText}</span>

        </>
    )

}

export default Tooltip;