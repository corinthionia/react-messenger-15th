import styled from 'styled-components';

const YourChatRoom = () => {
  const chats = [
    '하이하하이하이하이하이하이하이하이하이하이',
    '안녕',
    '헬로우',
    '하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이하이',
  ];

  return (
    <YourMessage>
      {chats.map((chat, i) => (
        <Message key={'your' + i}>{chat}</Message>
      ))}
    </YourMessage>
  );
};

const YourMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  background: yellow;
`;

const Message = styled.div`
  background: powderblue;

  border-radius: 2rem;
  margin: 0.5rem;
  padding: 1rem;

  align-self: flex-start;

  text-align: right;
`;

export default YourChatRoom;
