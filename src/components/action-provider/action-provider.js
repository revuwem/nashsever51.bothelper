import React from 'react';

class ActionProvider {
    constructor (createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    updateChatbotState = (message) => {
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }

    meet = () => {
        const meetingMessage = this.createChatBotMessage('Nice to meet you too');
        this.updateChatbotState(meetingMessage);
    }

    handleJavaScriptLinks = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on JavaScript",
            {
                widget: 'javascriptLinks',
            }
        );

        this.updateChatbotState(message);
    }
};

export default ActionProvider;