import { useContext } from 'react';
import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/commons/Components';
import NavBar from '../components/commons/NavBar';

import friends from '../assets/friends.json';
import UserList from '../components/commons/UserList';
import { ChatListContext } from '../contexts/ChatListContext';

const ChatList = () => {
  const { chatList } = useContext(ChatListContext);

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>
      <Content>
        {friends.map(({ userId, userName }, i) => (
          <UserList
            key={userId}
            userId={userId}
            userName={userName}
            message={chatList[i].chats[chatList[i].chats.length - 1].message}
          />
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatList;
