import styled from 'styled-components';

const YourChat = () => {
  const chats = [
    '하이하하이하이하이하이하이하이하이하이하이',
    '안녕',
    '헬로우',
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
  flex-direction: column;
`;

const Message = styled.div`
  max-width: 10rem;
  font-size: 0.75rem;

  margin: 0.5rem;
  padding: 0.75rem;
  align-self: flex-start;

  background: #efefef;
  border-radius: 1.5rem;
`;

export default YourChat;
