import React from 'react';

import './start-usage-list.css';

const StartUsageList = (props) => {
    const options = [
        {
            text: 'С чего начать работу с порталом?',
            handler: props.actionProvider.handleStartUsageFirstQuestion,
            id: 1
        },
        {
            text: 'Зачем нужна регистрация?',
            handler: ()=>{},
            id: 2
        },
        {
            text: 'Как зарегистрироваться на портале?',
            handler: ()=>{},
            id: 3
        },
        {
            text: 'Кнопка регистрации недоступна.',
            handler: ()=>{},
            id: 4
        },
        {
            text: 'Вернуться к разделам',
            handler: ()=>{},
            id: 5
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="start-usage-list-button button"
            key={option.id}
            onClick={option.handler}>
                {option.text}
        </button>
    ));

    return (
        <div className="start-usage-list-container"> {optionsMarkup} </div>
    );
};

export default StartUsageList;