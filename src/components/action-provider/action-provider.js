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

    handleQuestion = (responseText, widgetName) => {
        const message = this.createChatBotMessage( responseText, {widget: widgetName});

        this.updateChatbotState(message);
    }

    

    // START USAGE SECTION

    handleStartUsageQuestions = () => { 
        const responseText = 'Вопросы по теме "Начало работы с порталом"';
        const widgetName = 'startUsageList';

        this.handleQuestion(responseText, widgetName);
    }

    handleStartUsageFirstQuestion = () => {  
        const responseText = 'Чтобы начать работу, зарегистрируйтесь на портале. Обязательно ознакомьтесь с «Регламентом приёма и обработки сообщений», который можно найти в пункте "О проекте" меню портала.';
        const widgetName = 'startUsageConversationResponse';

        this.handleQuestion(responseText, widgetName);

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