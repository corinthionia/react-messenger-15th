import Chats from '../components/chatroom/Chats';
import InputForm from '../components/chatroom/InputForm';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import { Wrapper, Content } from '../components/commons/Components';

const ChatRoom = () => {
  return (
    <Wrapper>
      <ChatRoomHeader />
      <Content>
        <Chats />
      </Content>
      <InputForm />
    </Wrapper>
  );
};

export default ChatRoom;
