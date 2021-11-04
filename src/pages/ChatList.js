import styled from 'styled-components';

import NavigationBar from '../components/template/NavigationBar';
import Template from '../components/template/Template';

const ChatList = () => {
  return (
    <Template header={<Title>Messages</Title>} bottom={<NavigationBar />} />
  );
};

const Title = styled.span`
  margin: 3rem 2rem 0 2rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default ChatList;
