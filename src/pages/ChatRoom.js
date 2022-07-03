import { useParams } from 'react-router';
import { useRef, useState, useEffect, useContext } from 'react';
import { Wrapper, Content } from '../components/commons/Components';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomBody from '../components/chatroom/ChatRoomBody';
import InputForm from '../components/chatroom/InputForm';
import { ChatListContext } from '../contexts/ChatListContext';

const ChatRoom = () => {
  const { userId } = useParams();
  const [currentUserId, setCurrentUserId] = useState(userId);

  const { chatList } = useContext(ChatListContext);
  const filteredChats = chatList.filter((user) => user.userId === userId);
  const [filteredChatList, setFilteredChatList] = useState(filteredChats[0]);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [filteredChatList]);

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <Content ref={scrollRef}>
        <ChatRoomBody
          chatList={filteredChatList}
          setChatList={setFilteredChatList}
        />
      </Content>
      <InputForm
        currentUserId={currentUserId}
        chatList={filteredChatList}
        setChatList={setFilteredChatList}
      />
    </Wrapper>
  );
};

export default ChatRoom;
