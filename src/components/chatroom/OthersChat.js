import styled from 'styled-components';

const OthersChat = ({ chat, users }) => {
  return (
    <YourMessage>
      <ProfileImg src={users[1].img} />
      <Message key={chat.date}>{chat.text}</Message>
    </YourMessage>
  );
};

const YourMessage = styled.div`
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

const Message = styled.span`
  max-width: 12.5rem;
  font-size: 0.5rem;

  margin: 0.75rem 0.25rem;
  padding: 0.75rem;

  align-self: flex-start;
  text-align: justify;

  background: #efefef;
  border-radius: 1.5rem;
`;

export default OthersChat;
