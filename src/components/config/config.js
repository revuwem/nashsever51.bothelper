import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import BotHeader from '../bot-header';
import BotAvatar from '../bot-avatar';
import UserOption from '../user-option';

import botKnowledgeBase from '../bot-knowledge-base';

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
                options: [
                    {
                        id: 1,
                        text: 'Начало работы', 
                        handler: 'handleStartUsageQuestionList',                         
                    },
                    {
                        id: 2,
                        text: 'Личный кабинет', 
                        handler: 'handleProfileQuestionList',                         
                    },
                    {
                        id: 3,
                        text: 'Сообщения', 
                        handler: 'handleComplaintsQuestionList', 
                    },
                    { 
                        id: 4,
                        text: 'Голосования', 
                        handler: 'handleVotingsQuestionList',
                    },
                    { 
                        id: 5,
                        text: 'Инициативы', 
                        handler: 'handleInitiativesQuestionList',
                    },
                    { 
                        id: 6,
                        text: 'Благоустройство', 
                        handler: 'handleBeautificationQuestionList',
                    },
                    {
                        id: 7,
                        text: 'Карта работ', 
                        handler: 'handleWorkMapQuestionList', 
                    },
                    {
                        id: 8,
                        text: 'Техническая поддержка', 
                        handler: 'handleSupportQuestionList', 
                    },   
                    
                ],
            }
        },         
        // startUsageQuestionList  
        {
            widgetName: 'startUsageQuestionList',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'С чего начать работу с порталом?',
                        handler: 'handleStartUsageQuestion',
                    },
                    {
                        id: 2,
                        text: 'Зачем нужна регистрация?',
                        handler: 'handleStartUsageQuestion',
                    },
                    {
                        id: 3,
                        text: 'Как зарегистрироваться на портале?',
                        handler: 'handleStartUsageQuestion',
                    },
                    {
                        id: 4,
                        text: 'Кнопка регистрации недоступна.',
                        handler: 'handleStartUsageQuestion',
                    },
                    {
                        id: 5,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },
                ],
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
                        text: 'У меня остались вопросы по этому разделу',
                        handler: 'handleStartUsageQuestionList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
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
                options: [
                    {
                        id: 1,
                        text: 'Как войти в учётную запись?',
                        handler: 'handleProfileQuestion',
                    },
                    {
                        id: 2,
                        text: 'Как зайти в Личный кабинет?',
                        handler: 'handleProfileQuestion',
                    },
                    {
                        id: 3,
                        text: 'Не пришло письмо для подтверждения email.',
                        handler: 'handleProfileQuestion',
                    },
                    {
                        id: 4,
                        text: 'Что делать если я забыл пароль от учётной записи?',
                        handler: 'handleProfileQuestion',
                    },
                    {
                        id: 5,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },
                ],
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
                options: [
                    {
                        id: 1,
                        text: 'Зачем сообщать о проблемах?',
                        handler: 'handleComplaintsQuestion',
                    },
                    {
                        id: 2,
                        text: 'Как сообщить о проблеме?',
                        handler: 'handleComplaintsQuestion',
                    },
                    {
                        id: 3,
                        text: 'Какие сроки рассмотрения обращения?',
                        handler: 'handleComplaintsQuestion',
                    },
                    {
                        id: 4,
                        text: 'Как отследить ход рассмотрения обращения?',
                        handler: 'handleComplaintsQuestion',
                    },
                    {
                        id: 5,
                        text: 'Почему мне отказали в рассмотрении обращения?',
                        handler: 'handleComplaintsQuestion',
                    },
                    {
                        id: 6,
                        text: 'Как оценить качество решения проблемы?',
                        handler: 'handleComplaintsQuestion',
                    }, 
                    {
                        id: 7,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },                   
                ]
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
                options: [
                    {
                        id: 1,
                        text: 'Что такое Голосования?',
                        handler: 'handleVotingsQuestion',
                    },
                    {
                        id: 2,
                        text: 'Как оставить свой голос?',
                        handler: 'handleVotingsQuestion',
                    },
                    {
                        id: 3,
                        text: 'Где можно увидеть проекты, за которые я проголосовал?',
                        handler: 'handleVotingsQuestion',
                    },
                    {
                        id: 4,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },  
                ],
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
                options: [
                    {
                        id: 1,
                        text: 'Что такое Инициативы?',
                        handler: 'handleInitiativesQuestion',
                    },
                    {
                        id: 2,
                        text: 'Как предложить инициативу?',
                        handler: 'handleInitiativesQuestion',
                    },
                    {
                        id: 3,
                        text: 'Что происходит после отправки инициативы?',
                        handler: 'handleInitiativesQuestion',
                    },
                    {
                        id: 4,
                        text: 'Как поддержать инициативу?',
                        handler: 'handleInitiativesQuestion',
                    },
                    {
                        id: 5,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },  
                ],
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
                options: [
                    {
                        id: 1,
                        text: 'Что я могу узнать в разделе Благоустройство?',
                        handler: 'handleBeautificationQuestion',
                    },
                    {
                        id: 2,
                        text: 'Как я могу оставить своё мнение о проекте?',
                        handler: 'handleBeautificationQuestion',
                    },                    
                    {
                        id: 3,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },  
                ],
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
                options: [
                    {
                        id: 1,
                        text: 'Что я могу узнать в разделе Карта работ?',
                        handler: 'handleWorkMapQuestion',
                    },                                     
                    {
                        id: 2,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },  
                ],
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
                options: [
                    {
                        id: 1,
                        text: 'Как связаться со специалистом ТП?',
                        handler: 'handleSupportQuestion',
                    },   
                    {
                        id: 2,
                        text: 'Как оставить обратную связь о Портале?',
                        handler: 'handleSupportQuestion',
                    },                                  
                    {
                        id: 3,
                        text: 'Вернуться к разделам',
                        handler: 'handleDefaultOptions',
                    },  
                ],
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
