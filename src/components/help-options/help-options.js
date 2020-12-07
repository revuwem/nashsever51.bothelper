import React from 'react';

import './help-options.css';

const HelpOptions = (props) => {
    const options = [
        {text: 'Начало работы', handler: props.actionProvider.handleStartUsageQuestions, id: 1},
        {text: 'Личный кабинет', handler: ()=>{}, id: 2},
        {text: 'Сообщения', handler: ()=>{}, id: 3},
        {text: 'Голосования', handler: ()=>{}, id: 4},
        {text: 'Инициативы', handler: ()=>{}, id: 5},
        {text: 'Благоустройство', handler: ()=>{}, id: 6},
        {text: 'Карты', handler: ()=>{}, id: 7},
        {text: 'Техническая поддержка', handler: ()=>{}, id: 8},       
        
    ];

    const optionsMarkup = options.map((option) => (
        <button
        className="help-options-button button"
        key={option.id}
        onClick={option.handler}>
            {option.text}
        </button>
    ));

    return (
        <div className="help-options-container"> {optionsMarkup} </div>
    );
};

export default HelpOptions;