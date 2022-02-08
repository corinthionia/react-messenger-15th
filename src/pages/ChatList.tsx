import styled from 'styled-components';

import Template from '../base/Template';
import ChatListBox from '../components/chatlist/ChatListBox';
import NavigationBar from '../base/NavigationBar';

const ChatList = () => {
  return (
    <Template
      header={<Title>Messages</Title>}
      content={<ChatListBox />}
      backgroundColor={'#ffffff'}
      bottom={<NavigationBar />}
    />
  );
};

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 2rem 0 1rem;
`;

export default ChatList;
