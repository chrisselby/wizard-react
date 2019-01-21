import React, { Component } from 'react';

import NavItem from './elements/nav_item'
import PrevButton from './elements/prev_button'
import NextButton from './elements/next_button'

class Wizard extends Component {
    constructor(props) {
        super(props);

        var stepsCopy = this.props.steps.slice();
        stepsCopy.map((step, index) => {
            if(index === 0) {
                step.completed = true;
            }
            else {
                step.completed = false;
            }
            return step;
        });

        this.state = {
            currentStep: stepsCopy[0],
            steps: stepsCopy,
            data: props.data
        };

        this.getTemplate = this.getTemplate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    getTemplate() {
        return React.createElement(
            this.state.currentStep.template,
            {
                handleInputChange: this.handleInputChange,
                data: this.state.data
            }
        );
    };

    handleInputChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const existingData = this.state.data;
        existingData[name] = value;
        this.setState(existingData);
    };

    getCurrentStepIndex(currentStep) {
        return this.state.steps.indexOf(currentStep);
    }

    render() {

        const changeStep = (event, direction) => {
            event.preventDefault();

            // TODO: Add form validation, for now step is marked as completed
            // once user lands on it

            const updatedSteps = this.state.steps.slice();
            const currentStepIndex = this.getCurrentStepIndex(this.state.currentStep);

            updatedSteps[currentStepIndex].completed = true;
            this.setState({
                steps: updatedSteps
            });

            if(typeof direction === 'number') {
                if(this.state.steps[direction]) {
                    this.setState({
                        currentStep: updatedSteps[direction]
                    });
                }
            }
            else if(direction === '+') {
                if(this.state.steps[currentStepIndex + 1]) {
                    this.setState({
                        currentStep: updatedSteps[currentStepIndex + 1]
                    });
                }
            }
            else {
                if(this.state.steps[currentStepIndex - 1]) {
                    this.setState({
                        currentStep: updatedSteps[currentStepIndex - 1]
                    });
                }
            }
        };

        const navItems = this.state.steps.map((step, index) => {
            let buttonClass;
            const currentStepIndex = this.state.steps.indexOf(this.state.currentStep);

            if(index === currentStepIndex) {
                buttonClass = 'btn-primary';
            }
            else if(this.state.steps[index].completed) {
                buttonClass = 'completed';
            }
            else {
                buttonClass = 'btn-default';
            }
            return (
                <NavItem key={ index }
                         index={ index }
                         buttonClass={ buttonClass }
                         disabled={ !this.state.steps[index].completed && index !== currentStepIndex }
                         changeStep={ changeStep }
                         step={ step } />
            );
        });

        const getPrevButton = () => {
            if (this.state.steps[this.getCurrentStepIndex(this.state.currentStep) - 1]) {
                return (
                    <PrevButton firstStep={ this.state.currentStep.count === 1 }
                                disabled={ !this.state.steps[this.getCurrentStepIndex(this.state.currentStep) - 1] }
                                changeStep={ changeStep } />
                )
            }
        }

        return (
            <div className="wizard-container">
                <header>
                    <div className="row">
                        { navItems }
                    </div>
                </header>
                <div className="wizard-body">
                    <h2>{ this.state.currentStep.name }</h2>
                    <form>
                        { this.getTemplate() }
                        <div className="row">
                            <div className="col">
                                { getPrevButton() }
                                <NextButton nextStep={ this.state.steps[this.getCurrentStepIndex(this.state.currentStep) + 1] }
                                            submitDisabled={ Object.keys(this.state.data).length === 0 }
                                            disabled={ !this.state.steps[this.getCurrentStepIndex(this.state.currentStep)] }
                                            changeStep={ changeStep }
                                            submitWizard={ this.props.submitWizard } />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Wizard;
