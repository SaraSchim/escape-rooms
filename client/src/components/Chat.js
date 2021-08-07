import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useEffect } from 'react';
import '../css/chat.css';

import logo from '../images/logo.jpg';

function Chat() {
  useEffect(() => {
    addResponseMessage('שלום!');
    addResponseMessage('במה אפשר לעזור?');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage('היי! מצטערים, נציגינו עסוקים כעת בפניות קודמות, אנא נסו שוב מאוחר יותר')
  };


  return (
    <div className="chat">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="חדרי בריחה אצלכם בבית"
        subtitle=""
        senderPlaceHolder="הקלד/י כאן..."
        showTimeStamp
      />
    </div>
  );

}

export default Chat;