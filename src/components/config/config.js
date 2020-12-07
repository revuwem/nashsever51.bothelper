import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import LinkList from '../link-list';
import HelpOptions from '../help-options';
import StartUsageList from '../start-usage-list';
import StartUsageConversationResponse from '../start-usage-conversation-response';

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
            widgetName: 'javascriptLinks',
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 1,
                    },
                    {
                      text: "Mozilla JS Guide",
                      url:
                        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                      id: 2,
                    },
                    {
                      text: "Frontend Masters",
                      url: "https://frontendmasters.com",
                      id: 3,
                    },
                ],
            },
        },
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
