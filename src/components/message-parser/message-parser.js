import React from 'react';

class MessageParser {
    constructor (actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse = (message) => {
        console.log(message);

        const lowercasedMessage = message.toLowerCase();        
    }
};

export default MessageParser;