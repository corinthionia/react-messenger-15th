import { useParams } from 'react-router';
import styled from 'styled-components';
import me from '../../assets/me.json';
import chats from '../../assets/chats.json';
import friends from '../../assets/friends.json';

const Chats = () => {
  const { userId } = useParams();
  const userName = friends.filter((friend) => friend.userId == userId)[0]
    .userName;
  const chatList = chats.filter((chat) => userId === chat.userId);

  return (
    <Wrapper>
      {chatList[0].chats.map(({ userId, sentAt, message }) => (
        <ChatWrapper key={sentAt} sender={userId}>
          <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName sender={userId}>
              {userId === 'user0' ? me.userName : userName}
            </UserName>
            <Bubble sender={userId}>{message}</Bubble>
          </TextWrapper>
          <Time>{Date(sentAt).slice(16, 21)}</Time>
        </ChatWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  max-width: 95%;
  margin: 4%;

  display: flex;
  flex-direction: ${(props) =>
    props.sender === 'user0' ? 'row-reverse' : 'row'};
`;

const ProfileImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  max-width: 75%;
  margin: 0 3%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;
  height: 40%;

  font-size: 14px;
  color: #343a40;

  display: flex;
  flex-direction: ${(props) =>
    props.sender === 'user0' ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div`
  //   width: 92%;
  padding: 3% 4%;
  margin-top: 2.5%;

  font-size: 12px;
  line-height: 18px;

  display: flex;
  flex-direction: ${(props) =>
    props.sender === 'user0' ? 'row-reverse' : 'row'};

  color: ${({ sender }) => (sender === 'user0' ? '#ffffff' : '#000000')};
  background: ${({ sender }) => (sender === 'user0' ? '#1986fc' : '#f1f1f3')};
  border-radius: ${({ sender }) =>
    sender === 'user0' ? '12px 1px 12px 12px' : '1px 12px 12px 12px'};
`;

const Time = styled.div`
  color: #c8c8c8;
  font-size: 10px;
  display: flex;
  align-items: end;
`;

export default Chats;
