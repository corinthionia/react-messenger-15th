import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import FriendsList from '../components/friends/FriendsList';

import NavigationBar from '../components/template/NavigationBar';
import Template from '../components/template/Template';

const Friends = () => {
  return (
    <Template
      header={
        <Wrapper>
          <SearchBtn>
            <BsSearch />
          </SearchBtn>
          <Title>Friends</Title>
        </Wrapper>
      }
      content={<FriendsList />}
      bottom={<NavigationBar />}
    />
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1rem;
`;

const SearchBtn = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  margin: 0.5rem 2rem 0 0;

  font-size: 2rem;
  font-weight: 600;
`;

export default Friends;
