import React from 'react';

const StepThree = (props) => {
    const removeUnderscores = (input) => {
        var splitInput = input.split('_');
        var newWords = [];
        splitInput.forEach((word) => {
            newWords.push(word[0].toUpperCase() + word.substring(1));
        });
        return newWords.join(' ');
    }

    const summaryItems = () => {
        const keys = Object.keys(props.data);
        if(!keys.length) {
            return (
                <div className="col">
                    <p>Please enter your information in the previous steps.</p>
                </div>
            )
        }
        else {
            return keys.map((item, index) => {
                return (
                    <div className="col-6" key={ index }>
                        <dt>{ removeUnderscores(item) }</dt>
                        <dd>{ props.data[item] }</dd>
                    </div>
                );
            })
        }
    }

    return (
        <div>
            <div className="row">
                { summaryItems() }
            </div>
        </div>
    );
}

export default StepThree;
