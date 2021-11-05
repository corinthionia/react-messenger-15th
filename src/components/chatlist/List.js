import styled from 'styled-components';

import users from '../../assets/data/users.json';

import profile1 from '../../assets/profileImg/profile1.jpg';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <>
      {users.map((user) => (
        <Link to={'/chat/' + user.id} key={user.id}>
          <Wrapper>
            <ProfileImg src={profile1} />
            <TextWrapper>
              <Name>{user.name}</Name>
              <Message>{user.statusMsg}</Message>
            </TextWrapper>
          </Wrapper>
        </Link>
      ))}
    </>
  );
};

const Wrapper = styled.section`
  height: 20%;

  display: flex;
  flex-direction: row;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;

  margin: 0.5rem;
  padding: 1.25rem 1rem;

  border-radius: 50%;

  object-fit: cover;
`;

const TextWrapper = styled.section`
  width: 70%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Message = styled.span`
  font-size: 0.5rem;
`;

export default List;
