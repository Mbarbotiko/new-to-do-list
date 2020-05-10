import React from 'react';

//https://github.com/kriasoft/react-starter-kit/issues/909
class Tooltip extends React.Component {
    state = {
        active: 'invisible'
    }

    toggleToolTipOn = () => {
        this.setState({
            active: 'visible'
        })
    }

    toggleToolTipOff = () => {
        this.setState({
            active: 'invisible'
        })
    }
    render() {
        let toggleToolTip;
        if (this.state.active === 'visible') {
            toggleToolTip = this.toggleToolTipOff
        } else {
            toggleToolTip = this.toggleToolTipOn
        }
        return (
            <>
                <span className={`Tooltip ` + this.state.active}
                >You need to enter something</span>
                <button onClick={toggleToolTip}>toggle off</button>
            </>

        )
    }

}

export default Tooltip;




