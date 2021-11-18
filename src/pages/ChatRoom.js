import { useParams } from 'react-router';
import { useState } from 'react';

import ChatBox from '../components/chatroom/ChatBox';
import InputForm from '../components/chatroom/InputForm';
import Template from '../base/Template';
import ChatHeader from '../components/chatroom/ChatHeader';

import me from '../assets/data/me.json';
import users from '../assets/data/users.json';
import chat from '../assets/data/chat.json';

const ChatRoom = () => {
  const [chatList, setChatList] = useState(chat);

  const { userId } = useParams();
  const [currentUser, setCurrentUser] = useState(me);

  const handleChangeUser = () => {
    currentUser.id
      ? setCurrentUser(me)
      : setCurrentUser(users[parseInt(userId) - 1]);
  };

  return (
    <Template
      header={
        <ChatHeader
          handleChangeUser={handleChangeUser}
          currentUser={currentUser}
        />
      }
      content={
        <ChatBox
          chatList={chatList}
          setChatList={setChatList}
          userId={userId}
        />
      }
      background={'#e9effd'}
      bottom={
        <InputForm
          chatList={chatList}
          setChatList={setChatList}
          currentUser={currentUser}
        />
      }
    />
  );
};

export default ChatRoom;
