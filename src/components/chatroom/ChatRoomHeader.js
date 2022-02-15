import { useParams } from 'react-router';
import styled from 'styled-components';
import { Header } from '../commons/Components';
import friends from '../../assets/friends.json';

const ChatRoomHeader = () => {
  const { userId } = useParams();
  const userName = friends.filter((friend) => friend.userId == userId)[0]
    .userName;
  return (
    <Header style={{ display: 'flex', justifyContent: 'center' }}>
      <ProfileWrapper>
        <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
        <TextWrapper>
          <UserName>{userName}</UserName>
          <Typing>Typing...</Typing>
        </TextWrapper>
      </ProfileWrapper>
    </Header>
  );
};

const ProfileWrapper = styled.div`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 75%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;
  height: 50%;
  font-size: 16px;

  display: flex;
  align-items: center;
`;

const Typing = styled.div`
  width: 100%;
  height: 50%;

  font-size: 12px;
  color: #c8c8c8;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

export default ChatRoomHeader;
