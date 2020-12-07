import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';


import UserOption from '../user-option';


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
        // defaultOptions             
        {
            widgetName: 'defaultOptions',
            widgetFunc: (props) => <UserOption {...props} />,
            props: {
                options: [
                    {
                        id: 1,
                        text: 'Начало работы', 
                        handler: 'handleStartUsageQuestionsList',                         
                    },
                    {
                        id: 2,
                        text: 'Личный кабинет', 
                        handler: 'handleProfileQuestionsList',                         
                    },
                    {
                        id: 3,
                        text: 'Сообщения', 
                        handler: ()=>{}, 
                    },
                    { 
                        id: 4,
                        text: 'Голосования', 
                        handler: ()=>{},
                    },
                    { 
                        id: 5,
                        text: 'Инициативы', 
                        handler: ()=>{},
                    },
                    { 
                        id: 6,
                        text: 'Благоустройство', 
                        handler: ()=>{},
                    },
                    {
                        id: 7,
                        text: 'Карты', 
                        handler: ()=>{}, 
                    },
                    {
                        id: 8,
                        text: 'Техническая поддержка', 
                        handler: ()=>{}, 
                    },   
                    
                ],
            }
        },         
        // startUsageQuestionsList  
        {
            widgetName: 'startUsageQuestionsList',
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
                        handler: 'handleStartUsageQuestionsList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            },
        },   
        // profileQuestionsList
        {
            widgetName: 'profileQuestionsList',
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
                        handler: 'handleProfileQuestionsList',                        
                    },
                    {
                        id: 2,
                        text: 'Все разделы',
                        handler: 'handleDefaultOptions',                        
                    },
                ],
            }
        }
    ],
    initialMessages: [
        createChatBotMessage("Выберите интересующий раздел, чтобы я смог вам помочь😊", {widget: 'defaultOptions'})
    ],
};

export default config;
