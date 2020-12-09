import React from 'react';

import botKnowledgeBase from '../bot-knowledge-base';

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage; 
        this.defaultBotResponses = botKnowledgeBase;       
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
            this.defaultBotResponses.defaultResponse,
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
        const botResponse = this.defaultBotResponses.selectQuestion;        
        const widgetName = 'startUsageQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleStartUsageQuestion = (option) => {
        const responses = {
            1: 'Чтобы начать работу, зарегистрируйтесь на портале. Обязательно ознакомьтесь с «Регламентом приёма и обработки сообщений», который можно найти в пункте "О проекте" меню портала.',
            2: 'Авторизованным пользователям доступны все возможности Портала, такие как отправка сообщений о проблемах, участие в голосованиях, предложение инициатив и одобрение проектов по благоустройству. Это отличная возможность повлиять на развитие своего города и региона.',
            3: 'Чтобы зарегистрировать учётную запись нужно нажать на кнопку «Зарегистрироваться» в правом верхнем углу экрана. Откроется регистрационная форма. Далее следует заполнить все поля формы, указав свои настоящие данные. Проверьте правильность заполнения формы. Нажмите кнопку «Регистрация». После это вы автоматически авторизуетесь и будете перенаправлены на главную страницу Портала. Далее необходимо подтвердить адрес электронной почты в личном кабинете.',
            4: 'Проверьте, что вы заполнили все поля формы регистрации.',
        };
        
        const {id, text} = option;

        const botResponse = responses[id];
        const userResponse = text;
        const widgetName = 'startUsageConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }
    
    // HANDLE PROFILE QUESTIONS

    handleProfileQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;        
        const widgetName = 'profileQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleProfileQuestion = (option) => {
        const responses = {
            1: 'Чтобы войти в свою учётную запись, вам нужно найти белую кнопку "Войти" в правом верхнем углу Портала, затем нажать на неё, ввести свои учётные данные и нажать красную кнопку "Войти". Если вы не нашли белую кнопку "Войти", возможно вы уже вошли в свою учётную запись.',
            2: 'Чтобы зайти в Личный кабинет нужно нажать на значок учетной записи с вашим именем в правом верхнем углу экрана и в выпадающем списке выбрать интересующий раздел. Если вы не нашли такой значок, убедитесь, что вы вошли в свою учётную запись.',
            3: 'Проверьте папку "Спам" в своей эл. почте. Если вы не получили письмо для подтверждения электронной почты на портале, скорее всего вы неверно указали адрес электронной почты при регистрации. Чтобы зарегистрировать корректный адрес электронной почты следует выйти из текущей учетной записи, нажав на значок учётной записи в правом верхнем углу экрана и в выпадающем списке выбрать пункт «Выйти». Затем нажмите кнопку «Зарегистрироваться» и заполните форму регистрации заново.',
            4: `Откройте форму авторизации по кнопке «Войти» в правом верхнем углу экрана. Перейдите по ссылке «Забыли пароль?» на открывшейся форме авторизации. Произойдет переход на форму восстановления пароля «Сбросить пароль». В поле «Email» введите адрес электронной почты, на которую зарегистрирована ваша учётная запись. На вашу почту будет отправлено уведомление о сбросе пароля. В этом уведомлении перейдите по ссылке «Сбросить пароль». Вы будете направлены на форму сброса пароля, в которой следует указать новый пароль и подтвердить сброс.`,
        };
        
        const {id, text} = option;

        const botResponse = responses[id];
        const userResponse = text;
        const widgetName = 'profileConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }    

    // HANDLE COMPLAINTS QUESTIONS

    handleComplaintsQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;
        const widgetName = 'complaintsQuestionList';

        this.handleQuestion(botResponse, widgetName); 
    }

    handleComplaintsQuestion = (option) => {
        const responses = {
            1: 'Сообщая о недостатках в работе коммунальных и городских служб, проблемах благоустройства и качества жизни вы помогаете органам исполнительной власти контролировать и своевременно устранять недочеты по состоянию инфраструктуры, проезжей части, освещения, уборке территории и другим вопросам.',
            2: `Чтобы отправить сообщение, в разделе «Сообщения» на стартовой странице Портала нажмите кнопку «Сообщить о проблеме». Заполните необходимую информацию о вашей проблеме:
                •	выберите подходящую категорию и, по необходимости, подкатегорию сообщения;
                •	укажите адрес на карте или введите его вручную;
                •	кратко опишите суть проблемы, старайтесь указывать только факты;
                •	прикрепите фотографии, иллюстрирующие проблему;
                •	выберите одну из опций публичной (обращение будет видно другим пользователям Портала) или непубличной подачи сообщения;
                •	нажмите на кнопку «Отправить сообщение».`,
            3: 'В течение двух дней оператор Портала проводит первичную обработку сообщения: он определяет ответственного исполнителя и направляет заявку ему в работу. Исполнитель формирует официальный ответ с подтверждением, что проблема решена, или с указанием сроков, когда она будет решена. Максимальный срок от подачи сообщения жителем через портал до получения ответа от исполнителя – 10 рабочих дней.',
            4: 'Отслеживать, как решается заявленная проблема, и просматривать ответы исполнителей вы можете или в личном кабинете, или получая уведомления на электронную почту, указанную при регистрации на портале.',
            5: 'Заявки, составленные не в соответствии с «Регламентом приёма и обработки сообщений», возвращаются в личный кабинет для внесения изменений. Также, стоит проверить, подходит ли выбранная категория типу проблемы и выбрать более подходящую.',
            6: 'Получив ответ от исполнителя, вы можете оценить качество решения проблемы. Если оно вас не устраивает или проблема не устранена, заявка снова отправится на доработку исполнителю. Если вы довольны качеством решения, обязательно отметьте это в личном кабинете.',
        };
        
        const {id, text} = option;

        const botResponse = responses[id];        
        const widgetName = 'complaintsConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }  

    // HANDLE VOTINGS QUESTIONS

    handleVotingsQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;
        const widgetName = 'votingsQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleVotingsQuestion = (option) => {
        const responses = {
            1: 'Голосования – это возможность поделиться своим мнением в вопросах благоустройства и развития городской среды. В разделе «Голосования» можно ознакомиться со всеми проведёнными голосованиями. Для удобства можно применить фильтр по статусу голосования или по городу его проведения.',
            2: `Возможность принять участие в голосовании предоставляется авторизованным пользователям Портала. 
                Для того, чтобы принять участие в голосовании в разделе «Голосования» выбрать интересующее голосование и открыть карточку проекта. Затем выбрать вариант ответа и поделиться своим мнением, нажав на кнопку «Проголосовать».
                При желании можно перейти к другим открытым голосованиям на Портале в списке «Другие голосования».`,
            3: 'Список проектов, за которые вы проголосовали, можно найти в пункте «Мои голосования» Личного кабинета.',
        };

        const {id, text} = option;

        const botResponse = responses[id];
        const widgetName = 'votingsConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE INITIATIVES QUESTIONS
    
    handleInitiativesQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;
        const widgetName = 'initiativesQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleInitiativesQuestion = (option) => {
        const responses = {
            1: 'В разделе «Инициативы» Портала создаются и публикуются обращения граждан с частными инициативами, затрагивающими интересы жителей муниципального образования в рамках инициативного бюджетирования.',
            2: `Для подачи инициативы необходимо перейти по кнопке «Добавить инициативу» в верхнем правом углу экрана раздела «Инициативы». Далее следует выбрать категорию и подкатегорию инициативы, нажать кнопку «Продолжить». Затем заполните информацию о вашем предложении.
                Проверьте правильность заполнения формы и нажмите копку «Отправить инициативу».`,
            3: 'Созданная инициатива отправится на модерацию оператору Портала «Наш Север». При изменении статуса инициативы вам придёт уведомление в пункт «Инициативы» Личного кабинет и на электронную почту. После проверки инициатива будет опубликована.',
            4: `Возможность поддержать инициативу предоставляется авторизованным пользователям Портала. 
                Чтобы это сделать, в разделе «Инициативы» следует выбрать интересующую инициативу и открыть карточку проекта. Затем следует нажать кнопку «Поддержать инициативу». 
                При желании можно оставить комментарий или перейти к другим инициативным проектам на Портале в списке «Другие инициативы».`,
        };

        const {id, text} = option;

        const botResponse = responses[id];
        const widgetName = 'initiativesConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE BEAUTIFICATION QUESTIONS

    handleBeautificationQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;
        const widgetName = 'beautificationQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleBeautificationQuestion = (option) => {
        const responses = {
            1: 'В этом разделе вы можете посмотреть проекты по благоустройству и, если вы зарегистрированы, одобрить понравившиеся. В карточке проекта по благоустройству вы можете ознакомится с основной информацией, скачать презентацию.',
            2: 'В карточке проекта зарегистрированный пользователь может его одобрить, нажав на кнопку «палец вверх», а также оставить свой комментарий.',
        };

        const {id, text} = option;

        const botResponse = responses[id];
        const widgetName = 'beautificationConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE WORKMAP QUESTIONS

    handleWorkMapQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;        
        const widgetName = 'workMapQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleWorkMapQuestion = (option) => {
        const responses = {
            1: `В разделе «Карта работ» отображается информация о работах коммунальных, городских и дорожных служб. 
                Слева на карте находится список с карточками работ, из которых можно узнать точный адрес проведения, сроки выполнения и описание работ. 
                Над картой находится панель управления, в которой можно выбрать работы по статусу выполнения, типу и городу проведения.`,
        };

        const {id, text} = option;

        const botResponse = responses[id];
        const userResponse = text;
        const widgetName = 'workMapConversationReturn';

        this.handleQuestion(botResponse, widgetName, userResponse);
    }

    // HANDLE SUPPORT QUESTIONS

    handleSupportQuestionList = () => {
        const botResponse = this.defaultBotResponses.selectQuestion;
        const widgetName = 'supportQuestionList';

        this.handleQuestion(botResponse, widgetName);
    }

    handleSupportQuestion = (option) => {
        const responses = {
            1: 'Если вы не нашли ответа на свой вопрос Вы можете связаться со специалистом технической поддержки по электронной почте info@nashsever51.ru.',
            2: `Вы можете оставить свой отзыв и предложения по работе Портала через форму обратной связи.
                Чтобы открыть форму перейдите по ссылке «Сообщить о проблеме на сайте» в правом нижнем углу подвала Портала.`,
        };

        const {id, text} = option;

        const botResponse = responses[id];
        const widgetName = 'supportConversationReturn';
        const userResponse = text;

        this.handleQuestion(botResponse, widgetName, userResponse);
    }
    
};

export default ActionProvider;
