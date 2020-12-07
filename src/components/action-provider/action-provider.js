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

    handleDefaultOptions = () => {
        const message = this.createChatBotMessage(
            'Выберите интересующий раздел, чтобы я смог вам помочь😊',
            {
                widget: 'defaultOptions'
            }
        );

        this.updateChatbotState(message);
    }

    handleQuestion = (responseText, widgetName) => {
        const message = this.createChatBotMessage( responseText, {widget: widgetName});

        this.updateChatbotState(message);
    }



    // START USAGE SECTION

    handleStartUsageQuestionList = () => { 
        const responseText = 'Вопросы по теме "Начало работы с порталом"';
        const widgetName = 'startUsageQuestionList';

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
    
    // const responses = {
    //     1: '',
    //     2: '',
    //     3: '',
    //     4: '',
    // };

    // HANDLE PROFILE QUESTIONS

    handleProfileQuestionList = () => {
        const responseText = 'Вопросы по теме "Личный кабинет"';
        const widgetName = 'profileQuestionList';

        this.handleQuestion(responseText, widgetName);
    }

    handleProfileQuestion = (id) => {
        const responses = {
            1: 'Чтобы войти в свою учётную запись, вам нужно найти белую кнопку "Войти" в правом верхнем углу Портала, затем нажать на неё, ввести свои учётные данные и нажать красную кнопку "Войти". Если вы не нашли белую кнопку "Войти", возможно вы уже вошли в свою учётную запись.',
            2: 'Чтобы зайти в Личный кабинет нужно нажать на значок учетной записи с вашим именем в правом верхнем углу экрана и в выпадающем списке выбрать интересующий раздел. Если вы не нашли такой значок, убедитесь, что вы вошли в свою учётную запись.',
            3: 'Проверьте папку "Спам" в своей эл. почте. Если вы не получили письмо для подтверждения электронной почты на портале, скорее всего вы неверно указали адрес электронной почты при регистрации. Чтобы зарегистрировать корректный адрес электронной почты следует выйти из текущей учетной записи, нажав на значок учётной записи в правом верхнем углу экрана и в выпадающем списке выбрать пункт «Выйти». Затем нажмите кнопку «Зарегистрироваться» и заполните форму регистрации заново.',
            4: `Откройте форму авторизации по кнопке «Войти» в правом верхнем углу экрана. Перейдите по ссылке «Забыли пароль?» на открывшейся форме авторизации. Произойдет переход на форму восстановления пароля «Сбросить пароль». В поле «Email» введите адрес электронной почты, на которую зарегистрирована ваша учётная запись. На вашу почту будет отправлено уведомление о сбросе пароля. В этом уведомлении перейдите по ссылке «Сбросить пароль». Вы будете направлены на форму сброса пароля, в которой следует указать новый пароль и подтвердить сброс.`,
        };
        
        const responseText = responses[id];
        const widgetName = 'profileConversationReturn';

        this.handleQuestion(responseText, widgetName);
    }    

    // HANDLE COMPLAINTS QUESTIONS

    handleComplaintsQuestionList = () => {
        const responseText = 'Вопросы по теме "Сообщения"';
        const widgetName = 'complaintsQuestionList';

        this.handleQuestion(responseText, widgetName); 
    }

    handleComplaintsQuestion = (id) => {
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
        
        const responseText = responses[id];
        const widgetName = 'complaintsConversationReturn';

        this.handleQuestion(responseText, widgetName);
    }  

    // HANDLE VOTINGS QUESTIONS

    handleVotingsQuestionList = () => {
        const responseText = 'Вопросы по теме "Голосования"';
        const widgetName = 'votingsQuestionList';

        this.handleQuestion(responseText, widgetName);
    }

    handleVotingsQuestion = (id) => {
        const responses = {
            1: 'Голосования – это возможность поделиться своим мнением в вопросах благоустройства и развития городской среды. В разделе «Голосования» можно ознакомиться со всеми проведёнными голосованиями. Для удобства можно применить фильтр по статусу голосования или по городу его проведения.',
            2: `Возможность принять участие в голосовании предоставляется авторизованным пользователям Портала. 
                Для того, чтобы принять участие в голосовании в разделе «Голосования» выбрать интересующее голосование и открыть карточку проекта. Затем выбрать вариант ответа и поделиться своим мнением, нажав на кнопку «Проголосовать».
                При желании можно перейти к другим открытым голосованиям на Портале в списке «Другие голосования».`,
            3: 'Список проектов, за которые вы проголосовали, можно найти в пункте «Мои голосования» Личного кабинета.',
        };

        const responseText = responses[id];
        const widgetName = 'votingsConversationReturn';

        this.handleQuestion(responseText, widgetName);


    }

    
};

export default ActionProvider;