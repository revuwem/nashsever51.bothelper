import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from '../learning-options';

const config = {    
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        }
    ],
    initialMessages: [
        createChatBotMessage("Hey, I'm here to help! What do you want to learn?", {widget: 'learningOptions'})
    ],
};

export default config;
