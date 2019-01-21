import React from 'react';

const StepOne = (props) => {
    return (
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"
                           name="first_name"
                           value={ props.data.first_name || '' }
                           className="form-control"
                           onChange={ props.handleInputChange } />
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text"
                           name="last_name"
                           value={ props.data.last_name || '' }
                           className="form-control"
                           onChange={ props.handleInputChange } />
                </div>
            </div>
        </div>
    );
}
export default StepOne;
