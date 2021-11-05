import { useState } from 'react';
import { useParams } from 'react-router';

import ChatBox from '../components/chatroom/ChatBox';
import InputForm from '../components/chatroom/InputForm';
import Template from '../components/template/Template';
import ChatHeader from '../components/chatroom/ChatHeader';

import me from '../assets/data/me.json';
import users from '../assets/data/users.json';
import chat from '../assets/data/chat.json';

const Chat = () => {
  const { userId } = useParams();

  const [currentUser, setCurrentUser] = useState(me);
  const [chatList, setChatList] = useState(chat);

  const changeUser = () => {
    currentUser.id ? setCurrentUser(me) : setCurrentUser(users[userId - 1]);
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
