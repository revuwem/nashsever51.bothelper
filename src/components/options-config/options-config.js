const optionsConfig = {
    default: {
        questions: [
            {
                id: 1,
                text: 'Регистрация', 
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
    },
    startUsage:{
        questions: [            
            {
                id: 1,
                text: 'Зачем нужна регистрация?',
                handler: 'handleStartUsageQuestion',
            },
            {
                id: 2,
                text: 'Как зарегистрироваться на портале?',
                handler: 'handleStartUsageQuestion',
            },
            {
                id: 3,
                text: 'Кнопка регистрации недоступна. Что делать?',
                handler: 'handleStartUsageQuestion',
            },
            {
                id: 4,
                text: 'Кажется, мой вопрос касается другой темы',
                handler: 'handleDefaultOptions',
            },
        ],
        conversationReturn:[
            {
                id: 1,
                text: 'У меня остались вопросы о регистрации',
                handler: 'handleStartUsageQuestionList',                        
            },
            {
                id: 2,
                text: 'Понятно, спасибо',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    profile: {
        questions: [
            {
                id: 1,
                text: 'Как авторизоваться на Портале?',
                handler: 'handleProfileQuestion',
            },
            {
                id: 2,
                text: 'Как зайти в Личный кабинет?',
                handler: 'handleProfileQuestion',
            },            
            {
                id: 3,
                text: 'Что делать если я забыл пароль от учётной записи?',
                handler: 'handleProfileQuestion',
            },
            {
                id: 4,
                text: 'Что делать если не пришло письмо о восстановлении пароля?',
                handler: 'handleProfileQuestion',
            },
            {
                id: 5,
                text: 'Мой вопрос относится к другой теме',
                handler: 'handleDefaultOptions',
            },
        ],
        conversationReturn: [
            {
                id: 1,
                text: 'У меня остались вопросы о личном кабинете',
                handler: 'handleProfileQuestionList',                        
            },
            {
                id: 2,
                text: 'Спасибо за подсказку',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    complaints: { 
        questions: [
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
                text: 'Какой срок рассмотрения обращения?',
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
                text: 'Показать остальные темы',
                handler: 'handleDefaultOptions',
            },                   
        ],
        converastionReturn: [
            {
                id: 1,
                text: 'У меня есть ещё вопросы о сообщениях',
                handler: 'handleComplaintsQuestionList',                        
            },
            {
                id: 2,
                text: 'Понятно, спасибо',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    votings: {
        questions: [
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
                text: 'Меня интересует другая тема',
                handler: 'handleDefaultOptions',
            },  
        ],
        conversationReturn: [
            {
                id: 1,
                text: 'Ещё вопрос о голосованиях',
                handler: 'handleVotingsQuestionList',                        
            },
            {
                id: 2,
                text: 'Спасибо за пояснение',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    initiatives:{ 
        questions: [
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
                text: 'Вернуться к другим темам',
                handler: 'handleDefaultOptions',
            },  
        ],
        conversationReturn: [
            {
                id: 1,
                text: 'У меня остались вопросы по этой теме',
                handler: 'handleInitiativesQuestionList',                        
            },
            {
                id: 2,
                text: 'Понятно, спасибо',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    beautification: {
        questions: [
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
                text: 'Вернуться к другим темам',
                handler: 'handleDefaultOptions',
            },  
        ],
        conversationReturn: [
            {
                id: 1,
                text: 'У меня остались вопросы по этому разделу',
                handler: 'handleBeautificationQuestionList',                        
            },
            {
                id: 2,
                text: 'Спасибо',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    workmap: {
        questions: [
            {
                id: 1,
                text: 'Что я могу узнать в разделе Карта работ?',
                handler: 'handleWorkMapQuestion',
            },                                     
            {
                id: 2,
                text: 'Меня интересует другая тема',
                handler: 'handleDefaultOptions',
            },  
        ],
        conversationReturn: [                    
            {
                id: 1,
                text: 'Спасибо за подсказку',
                handler: 'handleDefaultOptions',                        
            },
        ],
    },
    support: {    
        questions: [
            {
                id: 1,
                text: 'Как связаться со специалистом технической поддержки?',
                handler: 'handleSupportQuestion',
            },   
            {
                id: 2,
                text: 'Как оставить обратную связь о Портале?',
                handler: 'handleSupportQuestion',
            },                                  
            {
                id: 3,
                text: 'Вернуться к другим темам',
                handler: 'handleDefaultOptions',
            },  
        ],
        conversationReturn: [ 
            {
                id: 1,
                text: 'У меня остались вопросы по этому разделу',
                handler: 'handleSupportQuestionList',                        
            },                   
            {
                id: 2,
                text: 'Спасибо',
                handler: 'handleDefaultOptions',                        
            },
        ],   
    } 
};

export default optionsConfig;