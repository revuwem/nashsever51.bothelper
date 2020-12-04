import React from 'react';

import './learning-options.css';

const LearningOptions = (props) => {
    const options = [
        {
            text: 'JavaScript', 
            handler: props.actionProvider.handleJavaScriptLinks, 
            id: 1
        },
        {text: 'Data Visualization', handler: ()=>{}, id: 2},
        {text: 'APIs', handler: ()=>{}, id: 3},
        {text: 'Security', handler: ()=>{}, id: 4},
        {text: 'Interview preparation', handler: ()=>{}, id: 5},
    ];

    const optionsMarkup = options.map((option) => {
       return (
            <button
                className="learning-option-button"
                key={option.id}
                onClick={option.handler}
            >
                {option.text}
            </button>
       );
    });

    return (
        <div className="learning-options-container"> {optionsMarkup} </div>
    );
};

export default LearningOptions;