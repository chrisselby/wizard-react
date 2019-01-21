import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import StepOne from './components/steps/step_one';
import StepTwo from './components/steps/step_two';
import StepThree from './components/steps/step_three';

// wizard component
import Wizard from './components/wizard/wizard';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: [
                {
                    'name': 'Basic Information',
                    'template': StepOne
                },
                {
                    'name': 'Residential Address',
                    'template': StepTwo
                },
                {
                    'name': 'Confirm Your Information',
                    'template': StepThree
                },
                {
                    'name': 'Confirm Your Information',
                    'template': StepThree
                }
            ],
            data: {}
        };
    }

    render() {

        const submitWizard = (event) => {
            event.preventDefault();
            console.log('wizard submitted');
            console.log(this.state.data);
        };

        return (
            <div className="container">
                <Wizard steps={ this.state.steps }
                        data={ this.state.data }
                        submitWizard={ submitWizard } />
            </div>
        );
    }
}

export default App;
