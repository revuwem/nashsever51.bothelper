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

        if (Array.isArray(botMessage)) {
            if(userMessage) {
                this.setState(prevState => ({
                    ...prevState,
                    messages: [...prevState.messages, userMessage, ...botMessage]
                }));
            } else {
                this.setState(prevState => ({
                    ...prevState,
                    messages: [...prevState.messages, ...botMessage]
                }));
            }    
        } else {
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
            
    } 

    handleResponse = (botResponse, widgetName, userResponse = null) => {
        let botMessage = '';
        let delay = -2500;   

        if (Array.isArray(botResponse)) {                 
            botMessage = botResponse.map((response, responseId, responses) => {
                    
                    delay += 3500;
                    console.log(delay);
                
                    if (responseId === responses.length-1) {
                        return this.createChatBotMessage(response, {widget: widgetName, withAvatar: true, delay});
                    } 

                   return this.createChatBotMessage(response, {withAvatar: true, delay});                
                }
            );
        } else {   
            delay += 2500;
            botMessage = this.createChatBotMessage(botResponse, {widget: widgetName, delay});
        }
        const userMessage = userResponse ? this.createClientMessage(userResponse) : null;

        this.updateChatbotState(botMessage, userMessage);
    }

    handleDefaultOptions = (option) => {
        const botResponse = this.botKnowledge.defaultResponse;
        const widgetName = 'defaultOptions';
        const userResponse = option.text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }


    // START USAGE SECTION

    handleStartUsageQuestionList = (option) => { 
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'startUsageQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleStartUsageQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.startUsage[id];
        const userResponse = text;
        const widgetName = 'startUsageConversationReturn';

        this.handleResponse(botResponse, widgetName, userResponse);
    }
    
    // HANDLE PROFILE QUESTIONS

    handleProfileQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'profileQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleProfileQuestion = (option) => {        
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.profile[id];
        const userResponse = text;
        const widgetName = 'profileConversationReturn';

        this.handleResponse(botResponse, widgetName, userResponse);
    }    

    // HANDLE COMPLAINTS QUESTIONS

    handleComplaintsQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'complaintsQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleComplaintsQuestion = (option) => {
                
        const {id, text} = option;

        const botResponse = this.botKnowledge.complaints[id];        
        const widgetName = 'complaintsConversationReturn';
        const userResponse = text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }  

    // HANDLE VOTINGS QUESTIONS

    handleVotingsQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'votingsQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleVotingsQuestion = (option) => {
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.votings[id];
        const widgetName = 'votingsConversationReturn';
        const userResponse = text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    // HANDLE INITIATIVES QUESTIONS
    
    handleInitiativesQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'initiativesQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleInitiativesQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.initiatives[id];
        const widgetName = 'initiativesConversationReturn';
        const userResponse = text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    // HANDLE BEAUTIFICATION QUESTIONS

    handleBeautificationQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'beautificationQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleBeautificationQuestion = (option) => {
        
        const {id, text} = option;

        const botResponse = this.botKnowledge.beautification[id];
        const widgetName = 'beautificationConversationReturn';
        const userResponse = text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    // HANDLE WORKMAP QUESTIONS

    handleWorkMapQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;        
        const widgetName = 'workMapQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleWorkMapQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.workmap[id];
        const userResponse = text;
        const widgetName = 'workMapConversationReturn';

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    // HANDLE SUPPORT QUESTIONS

    handleSupportQuestionList = (option) => {
        const botResponse = this.botKnowledge.selectQuestion;
        const widgetName = 'supportQuestionList';
        const userResponse = option.text;        

        this.handleResponse(botResponse, widgetName, userResponse);
    }

    handleSupportQuestion = (option) => {

        const {id, text} = option;

        const botResponse = this.botKnowledge.support[id];
        const widgetName = 'supportConversationReturn';
        const userResponse = text;

        this.handleResponse(botResponse, widgetName, userResponse);
    }
    
};

export default ActionProvider;
