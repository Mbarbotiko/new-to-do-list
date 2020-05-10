import React from 'react';

const Tooltip = (props) => {
    return (
        <>
            <span className={`Tooltip ` + props.isActive}
            >You need to enter something</span>

        </>
    )

}

export default Tooltip;