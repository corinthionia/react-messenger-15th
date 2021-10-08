import styled from 'styled-components';

const MyChat = ({ chat, users }) => {
  return (
    <MyMessage>
      <Message key={chat.date}>{chat.text}</Message>
      <ProfileImg src={users[0].img} />
    </MyMessage>
  );
};

const MyMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin: 0.5rem;
  border-radius: 50%;

  object-fit: cover;
`;

const Message = styled.span`
  max-width: 12.5rem;
  font-size: 0.5rem;

  color: white;
  background: #6699ff;

  margin: 0.75rem 0.25rem;
  padding: 0.75rem;

  text-align: justify;

  border-radius: 1.5rem;
`;

export default MyChat;
