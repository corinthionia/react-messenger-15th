import styled from 'styled-components';

const MyChat = ({ chat }) => {
  return (
    <MyMessage>
      <Message key={chat.date}>{chat.text}</Message>
    </MyMessage>
  );
};

const MyMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.span`
  max-width: 10rem;
  font-size: 0.75rem;

  color: white;
  background: #6699ff;

  margin: 0.75rem;
  padding: 0.5rem;
  align-self: flex-end;

  border-radius: 1rem;
`;

export default MyChat;
