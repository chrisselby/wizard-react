import React from 'react';

const StepTwo = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>Address Line 1</label>
                        <input type="text"
                               name="address_line_1"
                               value={ props.data.address_line_1 || '' }
                               className="form-control"
                               onChange={ props.handleInputChange } />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>Address Line 2</label>
                        <input type="text"
                               name="address_line_2"
                               placeholder="(Optional)"
                               value={ props.data.address_line_2 || '' }
                               className="form-control"
                               onChange={ props.handleInputChange } />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label>City</label>
                        <input type="text"
                               name="address_city"
                               value={ props.data.address_city || '' }
                               className="form-control"
                               onChange={ props.handleInputChange } />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>State</label>
                        <select className="form-control"
                                value={ props.data.address_state || '' }
                                name="address_state"
                                onChange={ props.handleInputChange }>
                            <option value="" disabled>Select State (No React Pun Intended...)</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepTwo;
