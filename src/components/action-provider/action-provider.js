import React from 'react';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    updateChatbotState = (message) => {
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.

        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }      

    handleHelpOptions = () => {
        const message = this.createChatBotMessage(
            'Выберите интересующий раздел, чтобы я смог вам помочь😊',
            {
                widget: 'helpOptions'
            }
        );

        this.updateChatbotState(message);
    }

    // START USAGE SECTION

    handleStartUsageQuestions = () => {
        const message = this.createChatBotMessage(
            `Вопросы по теме "Начало работы с порталом"`, {
                widget: 'startUsageList',
            }
        );

        this.updateChatbotState(message);
    }

    handleStartUsageFirstQuestion = () => {
        const message = this.createChatBotMessage(
            `Чтобы начать работу, зарегистрируйтесь на портале. Обязательно ознакомьтесь с «Регламентом приёма и обработки сообщений», который можно найти в пункте "О проекте" меню портала.`,
            {
                widget: 'startUsageConversationResponse',
            }
        );

        this.updateChatbotState(message);
    }   

    // HANDLE PROFILE QUESTIONS

    handleProfileQuestions = () => {

    }

    handleComplaintsQuestions = () => {

    }

    handleVotingsQuestions = () => {

    }

    handleInitiativesQuestions = () => {

    }

    handleBeautificationQuestions = () => {

    }

    handleWorkmapQuestions = () => {

    }

    handleSupportQuestions = () => {

    }

};

export default ActionProvider;