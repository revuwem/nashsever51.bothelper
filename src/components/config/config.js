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
                options: optionsConfig.default
            }
        },         
        // startUsageQuestionList  
        {
            widgetName: 'startUsageQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.startUsage,
            }
        },
        // startUsageConversationReturn
        {
            widgetName: 'startUsageConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',       //TODO: вынести кнопки ответов в конфиг, конфиг кнопок разделить на вложенные объекты вопросов и ответов
                        handler: 'handleStartUsageQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Спасибо, я разобрался',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },   
        // profileQuestionList
        {
            widgetName: 'profileQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.profile,
            }
        },         
        // profileConversationReturn
        {
            widgetName: 'profileConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleProfileQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            }
        },
        // complaintsQuestionList
        {
            widgetName: 'complaintsQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.complaints
            }
        },
        // complaintsConversationReturn
        {
            widgetName: 'complaintsConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleComplaintsQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
        // votingsQuestionList
        {
            widgetName: 'votingsQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.votings
            },
        },
        // votingsConversationReturn
        {
            widgetName: 'votingsConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleVotingsQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
        // initiativesQuestionList
        {
            widgetName: 'initiativesQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.initiatives
            },
        },
        // initiativesConversationReturn
        {
            widgetName: 'initiativesConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleInitiativesQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
        // beautificationQuestionList
        {
            widgetName: 'beautificationQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.beautification
            },
        },
        // beautificationConversationReturn
        {
            widgetName: 'beautificationConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleBeautificationQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
        // workMapQuestionList
        {
            widgetName: 'workMapQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.workmap
            },
        },
        // workMapConversationReturn
        {
            widgetName: 'workMapConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [                    
                    {
                        id: 1,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
        // supportQuestionList
        {
            widgetName: 'supportQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: optionsConfig.support
            },
        },
        // supportConversationReturn
        {
            widgetName: 'supportConversationReturn',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [ 
                    {
                        id: 1,
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleSupportQuestionList',                        
                    },                   
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },
    ],
    initialMessages: [
        createChatBotMessage(botKnowledgeBase.defaultResponse, {widget: 'defaultOptions'})
    ],
};

export default config;
