import styled from 'styled-components';

const User = ({ userId, userName, statusMsg }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
        <TextWrapper>
          <UserName>{userName}</UserName>
          <StatusMessage>{statusMsg}</StatusMessage>
        </TextWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const InfoWrapper = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 150px;
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.div`
  width: 150px;
  height: 40%;

  font-size: 18px;
`;

const StatusMessage = styled.div`
  width: 200px;
  height: 60%;

  font-size: 12px;

  display: flex;
  align-items: center;
`;

export default User;
