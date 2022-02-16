import ChatRoomBody from '../components/chatroom/ChatRoomBody';
import InputForm from '../components/chatroom/InputForm';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import { Wrapper, Content } from '../components/commons/Components';
import { useState } from 'react';
import { useParams } from 'react-router';

import chats from '../assets/chats.json';

const ChatRoom = () => {
  const { userId } = useParams();
  const [currentUserId, setCurrentUserId] = useState(userId);

  const filteredChats = chats.filter((user) => user.userId === userId);
  const [chatList, setChatList] = useState(filteredChats[0]);

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <Content>
        <ChatRoomBody chatList={chatList} />
      </Content>
      <InputForm
        currentUserId={currentUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </Wrapper>
  );
};

export default ChatRoom;
