import { useState } from 'react';

import ChatBox from '../components/chatroom/ChatBox';
import InputForm from '../components/chatroom/InputForm';
import Template from '../components/template/Template';
import ChatHeader from '../components/chatroom/ChatHeader';

import users from '../assets/data/users.json';
import chat from '../assets/data/chat.json';

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [chatList, setChatList] = useState(chat);

  const changeUser = () => {
    currentUser.id ? setCurrentUser(users[0]) : setCurrentUser(users[1]);
  };

  return (
    <Template
      header={<ChatHeader changeUser={changeUser} currentUser={currentUser} />}
      content={
        <ChatBox chatList={chatList} setChatList={setChatList} users={users} />
      }
      bottom={
        <InputForm
          currentUser={currentUser}
          chatList={chatList}
          setChatList={setChatList}
        />
      }
    />
  );
};

export default Chat;
