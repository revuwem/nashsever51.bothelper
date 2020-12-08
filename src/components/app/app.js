import React from 'react';
import Chatbot from 'react-chatbot-kit';

import './app.scss';

import ActionProvider from '../action-provider';
import MessageParser from '../message-parser';
import config from '../config';

function App() {
  return (
    <div className="nashsever-helper-bot">      
      <Chatbot 
        config={config} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;