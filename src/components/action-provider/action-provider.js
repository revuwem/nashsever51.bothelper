import React from 'react';

import botKnowledgeBase from '../bot-knowledge-base';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage; 
        this.botKnowledge = botKnowledgeBase;       
    }

    updateChatbotState = (botMessage, userMessage = null) => {
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.
        console.log(userMessage, typeof userMessage);

        if(userMessage) {
            this.setState(prevState => ({
                ...prevState,
                messages: [...prevState.messages, userMessage, botMessage]
            }));
        } else {
            this.setState(prevState => ({
                ...prevState,
                messages: [...prevState.messages, botMessage]
            }));
        }        
    }      

    handleDefaultOptions = () => {
        const message = this.createChatBotMessage(
            this.botKnowledge.defaultResponse,
            {
                widget: 'defaultOptions'
            }
        );

        this.updateChatbotState(message);
    }

    handleQuestion = (botResponse, widgetName, userResponse = null) => {
        const botMessage = this.createChatBotMessage(botResponse, {widget: widgetName});
        const userMessage = userResponse ? this.createClientMessage(userResponse) : null;

        this.updateChatbotState(botMessage, userMessage);
    }



    // START USAGE SECTION

    handleStartUsageQuestionList = () => { 
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'startUsageQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleStartUsageQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.startUsage[id];
        const userResponse = text;
        const widgetName = 'startUsageConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }
    
    // HANDLE PROFILE QUESTIONS

    handleProfileQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'profileQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleProfileQuestion = (option) => {        
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.profile[id];
        const userResponse = text;
        const widgetName = 'profileConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }    

    // HANDLE COMPLAINTS QUESTIONS

    handleComplaintsQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'complaintsQuestionList';

        this.handleQuestion(botResponse, widgetName); 
    }

    handleComplaintsQuestion = (option) => {
                
        const {id, text} = option;

        const botResponse = this.botKnowledge.complaints[id];        
        const widgetName = 'complaintsConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }  

    // HANDLE VOTINGS QUESTIONS

    handleVotingsQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'votingsQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleVotingsQuestion = (option) => {
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.votings[id];
        const widgetName = 'votingsConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE INITIATIVES QUESTIONS
    
    handleInitiativesQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'initiativesQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleInitiativesQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.initiatives[id];
        const widgetName = 'initiativesConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE BEAUTIFICATION QUESTIONS

    handleBeautificationQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'beautificationQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleBeautificationQuestion = (option) => {
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.beautification[id];
        const widgetName = 'beautificationConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE WORKMAP QUESTIONS

    handleWorkMapQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'workMapQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleWorkMapQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.workmap[id];
        const userResponse = text;
        const widgetName = 'workMapConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE SUPPORT QUESTIONS

    handleSupportQuestionList = () => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'supportQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleSupportQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.support[id];
        const widgetName = 'supportConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }
    
};

export default ActionProvider;
