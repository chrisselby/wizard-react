import React from 'react';

const NavItem = ({index, buttonClass, changeStep, disabled, step}) => {
    return (
        <div className="nav-item col-md">
            <button onClick={ (event) => changeStep(event, index) }
                    className={'btn ' + buttonClass}
                    disabled={ disabled }>
                <strong>Step { index + 1 }</strong>
                <p>{ step.name }</p>
            </button>
        </div>
    );
};

export default NavItem;
