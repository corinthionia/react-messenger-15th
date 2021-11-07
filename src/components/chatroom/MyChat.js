import styled from 'styled-components';

const MyChat = ({ chat }) => {
  return (
    <ChatWrapper>
      <ChatText>{chat.text}</ChatText>
      <ProfileImg src={require('../../assets/profileImg/0.jpg').default} />
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin: 0 0.5rem;
  border-radius: 50%;

  object-fit: cover;
`;

const ChatText = styled.span`
  max-width: 10rem;
  font-size: 0.5rem;

  color: white;
  background: #6699ff;

  margin: 0.75rem 0.25rem;
  padding: 0.5rem 0.75rem;

  text-align: justify;

  border-radius: 1.25rem 0.25rem 1.25rem 1.25rem;

  -webkit-user-select: none;
`;

export default MyChat;
