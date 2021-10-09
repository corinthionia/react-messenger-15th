import styled from 'styled-components';

// 더블 클릭 시 하트 추가하는 기능 구현 중
const Message = ({ chatObj, chat, setChat, users, heart }) => {
  const handleDblClick = (date) => {
    setChat(
      chat.map((todo) =>
        todo.date === date
          ? { ...todo, isDoubleClicked: !todo.isDoubleClicked }
          : todo
      )
    );
  };

  return (
    <ChatWrapper onDoubleClick={() => handleDblClick(chatObj.date)}>
      <ProfileImg src={users[1].img} />
      <ChatText>{chatObj.text}</ChatText>
      {heart}
    </ChatWrapper>
  );
};

const OthersChat = ({ chatObj, chat, setChat, users }) => {
  return (
    <>
      {chatObj.isDoubleClicked ? (
        <Message
          chatObj={chatObj}
          chat={chat}
          setChat={setChat}
          users={users}
          heart={<Heart>💗</Heart>}
        />
      ) : (
        <Message
          chatObj={chatObj}
          chat={chat}
          setChat={setChat}
          users={users}
          heart={null}
        />
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

  -webkit-user-select: none;
`;

const Heart = styled.span`
  font-size: 0.5rem;
  margin: 1rem 0.25rem;
  align-self: flex-end;

  -webkit-user-select: none;
`;

export default OthersChat;
