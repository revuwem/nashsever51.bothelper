import React, {Fragment, useState} from 'react';
import Chatbot from 'react-chatbot-kit';

import './app.scss';

import ActionProvider from '../action-provider';
import MessageParser from '../message-parser';
import config from '../config';

import botAvatar from '../../assets/images/bot_icon/bot.svg';

function App() {

  const [displayBot, toggleBot] = useState(false);

  const botClassName = displayBot ? 'nashsever-helper-bot active' : 'nashsever-helper-bot';

  return (
    <Fragment>
      <div className={botClassName}>    

        <Chatbot          
          config={config} 
          actionProvider={ActionProvider} 
          messageParser={MessageParser}
        />  
      </div>

      <button className="nashsever-helper-toggler" onClick={()=>toggleBot(prev => !prev)}>
        <img src={botAvatar}/>
      </button>
    </Fragment>
  );
}

export default App;