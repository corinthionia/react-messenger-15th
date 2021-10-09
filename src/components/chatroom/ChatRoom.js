import { useState } from 'react';

import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';
import InputForm from './InputForm';

import profile0 from '../users/img/profile0.jpg';
import profile1 from '../users/img/profile1.jpg';

const ChatRoom = () => {
  const users = [
    { id: 0, name: 'j__hy_n', img: profile0 },
    { id: 1, name: 'corinthionia', img: profile1 },
  ];

  const [currentUser, setCurrentUser] = useState(users[0]);

  const changeUser = () => {
    currentUser.id ? setCurrentUser(users[0]) : setCurrentUser(users[1]);
  };

  const [chatList, setChatList] = useState([
    {
      date: 1633700375865,
      userId: 0,
      text: '우리의 색은 gray and blue 엄지손가락으로 말풍선을 띄워',
      isDoubleClicked: false,
    },
    {
      date: 1633700378249,
      userId: 1,
      text: '우리의 네모 칸은 bloom 엄지 손가락으로 장미꽃을 피워',
      isDoubleClicked: true,
    },
    {
      date: 1633700378251,
      userId: 0,
      text: '띄어쓰기없이보낼게사랑인것같애',
      isDoubleClicked: false,
    },
    {
      date: 1633700378253,
      userId: 0,
      text: '백만송이장미꽃을나랑피워볼래?',
      isDoubleClicked: false,
    },
    {
      date: 1633700378252,
      userId: 1,
      text: '꽃잎의 색은 우리 마음 가는 대로 칠해 시들 때도 예쁘게',
      isDoubleClicked: false,
    },
  ]);

  return (
    <>
      <ChatHeader changeUser={changeUser} currentUser={currentUser} />
      <ChatBox chatList={chatList} setChatList={setChatList} users={users} />
      <InputForm
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
      />
    </>
  );
};

export default ChatRoom;
