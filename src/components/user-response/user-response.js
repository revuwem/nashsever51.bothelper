import React from 'react';

import './user-response.css';

const UserResponse = (props) => { 

    const optionsMarkup = props.options.map((option)=>(
        <button
            className="button"
            key={option.id}
            onClick={props.actionProvider[option.handler]}>
            {option.text}
        </button>
    ));

    return (
        <div className="conversation-response-container"> {optionsMarkup} </div>
    );
};

export default UserResponse;