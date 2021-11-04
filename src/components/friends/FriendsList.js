import styled from 'styled-components';

import users from '../../assets/data/users.json';
import profile0 from '../../assets/profileImg/profile0.jpg';

const FriendsList = () => {
  return (
    <>
      {users.map((user) => (
        <Wrapper>
          <ProfileImg src={profile0} />
          <TextWrapper>
            <Name>{user.name}</Name>
            <StatusMsg>{user.statusMsg}</StatusMsg>
          </TextWrapper>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.section`
  height: 20%;

  display: flex;
  flex-direction: row;
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

const StatusMsg = styled.span`
  font-size: 0.5rem;
`;

export default FriendsList;
