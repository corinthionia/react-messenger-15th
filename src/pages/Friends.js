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
          <Title>Friends</Title>
          <SearchBtn>
            <BsSearch />
          </SearchBtn>
        </Wrapper>
      }
      content={<FriendsList />}
      bottom={<NavigationBar />}
    />
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const SearchBtn = styled.button`
  width: 2rem;
  height: 2rem;

  margin: 0.5rem 7.5rem;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  margin: 2rem 2rem 0 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default Friends;
