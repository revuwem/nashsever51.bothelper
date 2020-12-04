import React from 'react';

class MessageParser {
    constructor (actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse = (message) => {
        console.log(message);

        const lowercasedMessage = message.toLowerCase();

        if(lowercasedMessage.includes('meet')) {
            this.actionProvider.meet();
        }

        if(lowercasedMessage.includes('javascript')) {
            this.actionProvider.handleJavaScriptLinks();
        }
    }
};

export default MessageParser;