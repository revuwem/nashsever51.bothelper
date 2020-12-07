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

    handleStartUsageQuestionsList = () => { 
        const responseText = 'Вопросы по теме "Начало работы с порталом"';
        const widgetName = 'startUsageQuestionsList';

        this.handleQuestion(responseText, widgetName);
    }

    handleStartUsageQuestion = (id) => {
        const responses = {
            1: 'Чтобы начать работу, зарегистрируйтесь на портале. Обязательно ознакомьтесь с «Регламентом приёма и обработки сообщений», который можно найти в пункте "О проекте" меню портала.',
            2: 'Авторизованным пользователям доступны все возможности Портала, такие как отправка сообщений о проблемах, участие в голосованиях, предложение инициатив и одобрение проектов по благоустройству. Это отличная возможность повлиять на развитие своего города и региона.',
            3: 'Чтобы зарегистрировать учётную запись нужно нажать на кнопку «Зарегистрироваться» в правом верхнем углу экрана. Откроется регистрационная форма. Далее следует заполнить все поля формы, указав свои настоящие данные. Проверьте правильность заполнения формы. Нажмите кнопку «Регистрация». После это вы автоматически авторизуетесь и будете перенаправлены на главную страницу Портала. Далее необходимо подтвердить адрес электронной почты в личном кабинете.',
            4: 'Проверьте, что вы заполнили все поля формы регистрации.',
        };
        
        const responseText = responses[id];
        const widgetName = 'startUsageConversationReturn';

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