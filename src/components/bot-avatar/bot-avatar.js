import React from 'react';

const BotAvatar = (props) => {
    const {src, alt} = props;
    return (
        <div className="nashsever-helper-bot__avatar">
            <img src={src} alt={alt}/>
        </div>
    );
};

export default BotAvatar;