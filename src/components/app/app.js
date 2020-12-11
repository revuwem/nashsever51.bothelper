import React, {Fragment, useState} from 'react';
import Chatbot from 'react-chatbot-kit';

import './app.scss';

import ActionProvider from '../action-provider';
import MessageParser from '../message-parser';
import config from '../config';

import botAvatar from '../../assets/images/bot_icon/bot.svg';

function App() {

  const [displayBot, toggleBot] = useState(false);

  const saveMessages = (messages) => {
    localStorage.setItem("nashsever_helper_messages", JSON.stringify(messages));
  }; 

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("nashsever_helper_messages"));
    return messages;
  };  

  return (
    <Fragment>
      <div className="nashsever-helper-bot"> 
       { 
          displayBot && ( 
            <Chatbot          
            config={config} 
            actionProvider={ActionProvider} 
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          /> 
          )
        }
      </div>

      <button className="nashsever-helper-toggler" onClick={()=>toggleBot(prev => !prev)}>
        { 
          displayBot ? 
            <i class="fas fa-times fa-3x"></i> :
            <img src={botAvatar}/> 
        }
      </button>
    </Fragment>
  );
}

export default App;