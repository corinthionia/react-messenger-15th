import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';

import users from '../assets/users.json';
import Chat from '../components/chatlist/Chat';

const ChatList = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Chat List</HeaderTitle>
      </Header>
      <Content>
        {users.map(({ userId, userName }) => (
          <Chat
            key={userId}
            userId={userId}
            userName={userName}
            lastMsg={'안뇽안뇽'}
          />
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatList;
