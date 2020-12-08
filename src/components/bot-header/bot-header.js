import React from 'react';

const BotHeader = (props) => {

    const {botName} = props;

    return (
        <div className="nashsever-helper-bot__header">
            <span>{botName}</span>
        </div>
    );
};

export default BotHeader;