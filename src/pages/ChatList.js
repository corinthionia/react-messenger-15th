import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';

import friends from '../assets/friends.json';
import chats from '../assets/chats.json';
import Chat from '../components/chatlist/Chat';

const ChatList = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Chat List</HeaderTitle>
      </Header>
      <Content>
        {friends.map(({ userId, userName }, i) => (
          <Chat
            key={userId}
            userId={userId}
            userName={userName}
            lastMsg={chats[i].chats[0].message}
          />
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatList;
