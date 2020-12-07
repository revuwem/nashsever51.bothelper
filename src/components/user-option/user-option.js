import React from 'react';

import './user-option.css';

const UserOption = (props) => { 

    const optionsMarkup = props.options.map((option)=>(
        <button
            className="button user-option-button"
            key={option.id}
            onClick={()=>props.actionProvider[option.handler](option.id)}>
            {option.text}
        </button>
    ));

    return (
        <div className="user-option-container"> {optionsMarkup} </div>
    );
};

export default UserOption;