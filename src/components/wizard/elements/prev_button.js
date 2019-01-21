import React from 'react';

const PrevButton = ({firstStep, disabled, changeStep}) => {
    if(!firstStep) {
        return (
            <button className="btn btn-primary"
                    disabled={ disabled }
                    onClick={ (event) => changeStep(event, '-') }>&lt; Previous</button>
        )
    }
    return null;
};

export default PrevButton;
