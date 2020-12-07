import React from 'react';

import './start-usage-conversation-response.css';

const StartUsageConversationResponse = (props) => {
    const options = [
        {
            text: 'У меня остались вопросы по этому разделу',
            handler: props.actionProvider.handleStartUsageQuestions,
            id: 1,
        },
        {
            text: 'Все разделы',
            handler: props.actionProvider.handleHelpOptions,
            id: 1,
        },
    ];

    const optionsMarkup = options.map((option)=>(
        <button
            className="button"
            key={options.id}
            onClick={option.handler}>
            {option.text}
        </button>
    ));

    return (
        <div className="conversation-response-container"> {optionsMarkup} </div>
    );
};

export default StartUsageConversationResponse;