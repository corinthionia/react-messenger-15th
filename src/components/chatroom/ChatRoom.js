import { useState } from 'react';

import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';
import InputForm from './InputForm';

import profile0 from '../profile/img/profile0.jpg';
import profile1 from '../profile/img/profile1.jpg';

const ChatRoom = () => {
  const users = [
    { id: 0, name: 'j__hy_n', img: profile0 },
    { id: 1, name: 'corinthionia', img: profile1 },
  ];

  const [currentUser, setCurrentUser] = useState(users[0]);

  const changeUser = () => {
    currentUser.id ? setCurrentUser(users[0]) : setCurrentUser(users[1]);
  };

  const [chat, setChat] = useState([
    {
      date: 1633700375865,
      userId: 0,
      text: '안녕 클레오파트라 세상에서 제일 가는 포테이토 칩!',
    },
    {
      date: 1633700378249,
      userId: 1,
      text: '안녕 클레오파트라 세상에서 제일 가는 포테이토 칩!',
    },
  ]);

  return (
    <>
      <ChatHeader changeUser={changeUser} currentUser={currentUser} />
      <ChatBox currentUser={currentUser} chat={chat} users={users} />
      <InputForm currentUser={currentUser} chat={chat} setChat={setChat} />
    </>
  );
};

export default ChatRoom;
