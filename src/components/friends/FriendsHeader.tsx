import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';

const FriendsHeader = () => {
  return (
    <Wrapper>
      <Title>Friends</Title>
      <Link to="/search">
        <SearchBtn />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

const SearchBtn = styled(BsSearch)`
  width: 0.9rem;
  height: 0.9rem;

  margin: 1rem 4rem;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.span`
  margin: 2rem 2rem 0 1rem;

  font-size: 2rem;
  font-weight: 600;
`;

export default FriendsHeader;
