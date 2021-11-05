import styled from 'styled-components';

import users from '../../assets/data/users.json';
import me from '../../assets/data/me.json';

const FriendsList = () => {
  const makeList = (user) => {
    return (
      <Wrapper key={user.id}>
        <ProfileImg
          src={require('../../assets/profileImg/' + user.id + '.jpg').default}
        />
        <TextWrapper>
          <Name>{user.name}</Name>
          <StatusMsg>{user.statusMsg}</StatusMsg>
        </TextWrapper>
      </Wrapper>
    );
  };

  return (
    <>
      {makeList(me)}
      {users.map((user) => makeList(user))}
    </>
  );
};

const Wrapper = styled.section`
  height: 20%;

  display: flex;
  flex-direction: row;
  justify-content: center;
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
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatusMsg = styled.span`
  font-size: 0.5rem;
`;

export default FriendsList;
