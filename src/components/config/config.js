import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';


import UserResponse from '../user-response';


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
        // helpOptions             
        {
            widgetName: 'helpOptions',
            widgetFunc: (props) => <UserResponse {...props} />,
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
                        handler: ()=>{},                         
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
            widgetFunc: (props) => <UserResponse {...props} />,
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
                        handler: 'handleStartUsageQuestion',
                    },
                ],
            }
        },
        // startUsageConversationResponse
        {
            widgetName: 'startUsageConversationReturn',
            widgetFunc: (props) => <UserResponse {...props} />,
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
                        handler: 'handleHelpOptions',                        
                    },
                ],
            }
        },     
    ],
    initialMessages: [
        createChatBotMessage("Выберите интересующий раздел, чтобы я смог вам помочь😊", {widget: 'helpOptions'})
    ],
};

export default config;
