import { useParams } from 'react-router';
import styled from 'styled-components';
import me from '../../assets/me.json';
import friends from '../../assets/friends.json';

const ChatRoomBody = ({ chatList }) => {
  const { userId } = useParams();
  const userName = friends.filter((friend) => friend.userId === userId)[0]
    .userName;
  return (
    <Wrapper>
      {chatList.chats.map(({ userId, sentAt, message }) => (
        <ChatWrapper key={sentAt} sender={userId}>
          <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName sender={userId}>
              {userId === 'user0' ? me.userName : userName}
            </UserName>
            <ChatInfoWrapper sender={userId}>
              <Bubble sender={userId}>{message}</Bubble>
              <Time>{Date(sentAt).slice(16, 21)}</Time>
            </ChatInfoWrapper>
          </TextWrapper>
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
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 88%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;

  font-size: 14px;
  color: #343a40;

  display: flex;
  flex-direction: ${(props) =>
    props.sender === 'user0' ? 'row-reverse' : 'row'};
`;

const ChatInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) =>
    props.sender === 'user0' ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div`
  padding: 3%;
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
  margin: 0 2%;

  display: flex;
  align-items: end;
`;

export default ChatRoomBody;
