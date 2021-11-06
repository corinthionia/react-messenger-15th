import { useParams } from 'react-router';
import { useState } from 'react';

import ChatBox from '../components/chatroom/ChatBox';
import InputForm from '../components/chatroom/InputForm';
import Template from '../components/template/Template';
import ChatHeader from '../components/chatroom/ChatHeader';

import me from '../assets/data/me.json';
import users from '../assets/data/users.json';
import chat from '../assets/data/chat.json';

const Chat = () => {
  const [chats, setChats] = useState(chat);

  const { userId } = useParams();
  const [currentUser, setCurrentUser] = useState(me);

  // 테스트...
  const chatList = chats;

  const changeUser = () => {
    currentUser.id
      ? setCurrentUser(me)
      : setCurrentUser(users[parseInt(userId) - 1]);
  };

  return (
    <Template
      header={<ChatHeader changeUser={changeUser} currentUser={currentUser} />}
      content={<ChatBox chatList={chatList} userId={userId} />}
      background={'#e9effd'}
      bottom={<InputForm chatList={chatList} currentUser={currentUser} />}
    />
  );
};

export default Chat;
