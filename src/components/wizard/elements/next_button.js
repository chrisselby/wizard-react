import React from 'react';

const NextButton = ({nextStep, submitDisabled, disabled, changeStep, submitWizard}) => {
    if(nextStep) {
        return (
            <button className="btn btn-primary float-right"
                    disabled={ disabled }
                    onClick={ (event) => changeStep(event, '+') }>Next ></button>
        )
    }
    else {
        return (
            <button className="btn btn-success float-right"
                    disabled={ submitDisabled }
                    onClick={ submitWizard }>Submit</button>
        )
    }
};

export default NextButton;
