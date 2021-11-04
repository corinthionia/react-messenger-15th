import styled from 'styled-components';

import NavigationBar from '../components/template/NavigationBar';
import Template from '../components/template/Template';
import List from '../components/chatlist/List';

const ChatList = () => {
  return (
    <Template
      header={<Title>Messages</Title>}
      content={<List />}
      bottom={<NavigationBar />}
    />
  );
};

const Title = styled.span`
  margin: 2rem 2rem 0 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default ChatList;
