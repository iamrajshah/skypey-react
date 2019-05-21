import React from 'react';
import Header from '../components/Header';
import Chats from './Chats';
import MessageInput from './MessageInput';
import store from '../store';
import _ from 'lodash';
import './ChatWindow.css';
const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const {typing} = state;
  console.log('activeUser', activeUser);
  return (
    <div className="ChatWindow">
     <Header user={activeUser} />
     <Chats messages={_.values(activeMessages)} />
     <MessageInput value={typing} />
    </div>
  );
};
export default ChatWindow;
