import React from 'react';

const Tooltip = (props) => {
    return (
        <>
            <span className={`Tooltip ` + props.isActive}
            >{props.alertText}</span>

        </>
    )

}

export default Tooltip;