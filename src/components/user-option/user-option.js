import React from 'react';

const UserOption = (props) => { 

    const optionsMarkup = props.options.map((option)=>(
        <button
            className="nashsever-helper-bot__button nashsever-helper-bot__button--user-option"
            key={option.id}
            onClick={()=>props.actionProvider[option.handler](option)}>
            {option.text}
        </button>
    ));

    return (
        <div className="nashsever-helper-bot__user-options"> {optionsMarkup} </div>
    );
};

export default UserOption;