import styled from 'styled-components';
import FriendsList from '../components/friends/FriendsList';

import NavigationBar from '../components/template/NavigationBar';
import Template from '../components/template/Template';

const Friends = () => {
  return (
    <Template
      header={<Title>Friends</Title>}
      content={<FriendsList />}
      bottom={<NavigationBar />}
    />
  );
};

const Title = styled.span`
  margin: 3rem 2rem 0 2rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default Friends;
