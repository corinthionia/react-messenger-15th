import { useState } from 'react';

import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';
import InputForm from './InputForm';

import profile0 from '../profile/img/profile0.jpg';
import profile1 from '../profile/img/profile1.png';

const ChatRoom = () => {
  const users = [
    { id: 0, name: '주현', img: profile0 },
    { id: 1, name: '이름', img: profile1 },
  ];

  const [currentUser, setCurrentUser] = useState(users[0]);

  const changeProfile = () => {
    if (currentUser.id === 0) {
      setCurrentUser(users[1]);
    } else {
      setCurrentUser(users[0]);
    }
  };

  const [chat, setChat] = useState([]);

  return (
    <>
      <ChatHeader changeProfile={changeProfile} currentUser={currentUser} />
      <ChatBox currentUser={currentUser} chat={chat} />
      <InputForm currentUser={currentUser} chat={chat} setChat={setChat} />
    </>
  );
};

export default ChatRoom;
