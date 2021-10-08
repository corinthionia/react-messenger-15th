import styled from 'styled-components';

// 더블 클릭 시 하트 추가하는 기능 구현 중
const Message = ({ chat, users, heart }) => {
  return (
    <ChatWrapper>
      <ProfileImg src={users[1].img} />
      <ChatText>{chat.text}</ChatText>
      {heart}
    </ChatWrapper>
  );
};

const OthersChat = ({ chat, users }) => {
  return (
    <>
      {chat.isDoubleClicked ? (
        <Message chat={chat} users={users} heart={<Heart>💗</Heart>} />
      ) : (
        <Message chat={chat} users={users} heart={null} />
      )}
    </>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin: 0.5rem;
  border-radius: 50%;

  object-fit: cover;
`;

const ChatText = styled.span`
  max-width: 12.5rem;
  font-size: 0.5rem;

  margin: 0.75rem 0.25rem;
  padding: 0.75rem;

  align-self: flex-start;
  text-align: justify;

  background: #efefef;
  border-radius: 1.5rem;
`;

const Heart = styled.span`
  font-size: 0.5rem;
  margin: 1rem 0.25rem;
  align-self: flex-end;
`;

export default OthersChat;
