import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import HelpOptions from '../help-options';
import StartUsageList from '../start-usage-list';
import StartUsageConversationResponse from '../start-usage-conversation-response';


const botName = 'Борис';

const config = {    
    botName: botName,
    customComponents: {
        header: () => <div style={{ color: '#fff', backgroundColor: '#376B7E', padding: "10px", borderRadius: "3px" }}>{botName}</div>
    },
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
            widgetName: 'helpOptions',
            widgetFunc: (props) => <HelpOptions {...props} />,
        },
        {
            widgetName: 'startUsageConversationResponse',
            widgetFunc: (props) => <StartUsageConversationResponse {...props} />,
        },        
        {
            widgetName: 'startUsageList',
            widgetFunc: (props) => <StartUsageList {...props} />,
        }
    ],
    initialMessages: [
        createChatBotMessage("Выберите интересующий раздел, чтобы я смог вам помочь😊", {widget: 'helpOptions'})
    ],
};

export default config;
