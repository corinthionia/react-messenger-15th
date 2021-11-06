import { useState } from 'react';
import { useParams } from 'react-router';

import ChatBox from '../components/chatroom/ChatBox';
import InputForm from '../components/chatroom/InputForm';
import Template from '../components/template/Template';
import ChatHeader from '../components/chatroom/ChatHeader';

import me from '../assets/data/me.json';
import users from '../assets/data/users.json';

const Chat = () => {
  const { userId } = useParams();
  const [currentUser, setCurrentUser] = useState(me);

  // local storage에 저장된 데이터(갱신된 chatList)를 불러와서 chatList에 저장
  const chatList = JSON.parse(localStorage.getItem('chats'));

  const changeUser = () => {
    currentUser.id ? setCurrentUser(me) : setCurrentUser(users[userId - 1]);
  };

  return (
    <Template
      header={<ChatHeader changeUser={changeUser} currentUser={currentUser} />}
      content={<ChatBox chatList={chatList} userId={userId} />}
      bottom={<InputForm chatList={chatList} currentUser={currentUser} />}
    />
  );
};

export default Chat;
