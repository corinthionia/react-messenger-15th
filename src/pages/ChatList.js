import styled from 'styled-components';

import NavigationBar from '../base/NavigationBar';
import Template from '../base/Template';
import ListBox from '../components/chatlist/ListBox';

const ChatList = () => {
  return (
    <Template
      header={<Title>Messages</Title>}
      content={<ListBox />}
      background={false}
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
