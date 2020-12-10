import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import BotHeader from '../bot-header';
import BotAvatar from '../bot-avatar';
import UserOption from '../user-option';

import botKnowledgeBase from '../bot-knowledge-base';
import optionsConfig from '../options-config';

import botAvatar from '../../assets/images/bot_icon/bot.svg';

const botName = 'Борис';
const botAvatarAlt = botName[0];

const config = {    
    customComponents: {
        header: () => <BotHeader botName={botName} />,
        botAvatar: () => <BotAvatar src={botAvatar} alt={botAvatarAlt} />
    },
    customStyles: {        
        chatButton: {
            backgroundColor: "#183f86",
        },
    },
    widgets: [  
        // defaultOptions             
        {
            widgetName: 'defaultOptions',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.default.questions,
            }
        },         
        // startUsageQuestionList  
        {
            widgetName: 'startUsageQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.startUsage.questions,
            }
        },
        // startUsageConversationReturn
        {
            widgetName: 'startUsageConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.startUsage.conversationReturn,
            },
        },   
        // profileQuestionList
        {
            widgetName: 'profileQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.profile.questions,
            }
        },         
        // profileConversationReturn
        {
            widgetName: 'profileConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.profile.conversationReturn,
            }
        },
        // complaintsQuestionList
        {
            widgetName: 'complaintsQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.complaints.questions,
            }
        },
        // complaintsConversationReturn
        {
            widgetName: 'complaintsConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.complaints.converastionReturn,
            },
        },
        // votingsQuestionList
        {
            widgetName: 'votingsQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.votings.questions,
            },
        },
        // votingsConversationReturn
        {
            widgetName: 'votingsConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.votings.conversationReturn,
            },
        },
        // initiativesQuestionList
        {
            widgetName: 'initiativesQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.initiatives.questions,
            },
        },
        // initiativesConversationReturn
        {
            widgetName: 'initiativesConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.initiatives.conversationReturn,
            },
        },
        // beautificationQuestionList
        {
            widgetName: 'beautificationQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.beautification.questions,
            },
        },
        // beautificationConversationReturn
        {
            widgetName: 'beautificationConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.beautification.conversationReturn,
            },
        },
        // workMapQuestionList
        {
            widgetName: 'workMapQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.workmap.questions,
            },
        },
        // workMapConversationReturn
        {
            widgetName: 'workMapConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.workmap.conversationReturn,
            },
        },
        // supportQuestionList
        {
            widgetName: 'supportQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.support.questions,
            },
        },
        // supportConversationReturn
        {
            widgetName: 'supportConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.support.conversationReturn,
            },
        },
    ],
    initialMessages: [
        createChatBotMessage(botKnowledgeBase.defaultResponse, {widget: 'defaultOptions'})
    ],
};

export default config;
