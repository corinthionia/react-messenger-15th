import styled from 'styled-components';

const OthersChat = ({ chat }) => {
  return (
    <YourMessage>
      <Message key={chat.date}>{chat.text}</Message>
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

export default OthersChat;
