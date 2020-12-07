import React from 'react';

import './user-response.css';

const UserResponse = (props) => { 

    const optionsMarkup = props.options.map((option)=>(
        <button
            className="button user-response-button"
            key={option.id}
            onClick={()=>props.actionProvider[option.handler](option.id)}>
            {option.text}
        </button>
    ));

    return (
        <div className="user-response-container"> {optionsMarkup} </div>
    );
};

export default UserResponse;