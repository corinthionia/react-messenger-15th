import styled from 'styled-components';
import { Link } from 'react-router-dom';

import users from '../../assets/data/users.json';

const List = () => {
  return (
    <>
      {users.map((user) => (
        <StyledLink to={'/chat/' + user.id} key={user.id}>
          <Wrapper>
            <ProfileImg
              src={
                require('../../assets/profileImg/' + user.id + '.jpg').default
              }
            />
            <TextWrapper>
              <Name>{user.name}</Name>
              <Message>{user.statusMsg}</Message>
            </TextWrapper>
          </Wrapper>
        </StyledLink>
      ))}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.section`
  height: 20%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  width: 4rem;
  height: 4rem;

  margin: 0 0.5rem 0 1rem;
  padding: 1.25rem 1rem;

  border-radius: 50%;

  object-fit: cover;
`;

const TextWrapper = styled.section`
  width: 70%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: black;
  text-decoration: none;
`;

const Name = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Message = styled.span`
  font-size: 0.5rem;
`;

export default List;
