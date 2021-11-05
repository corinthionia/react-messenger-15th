import styled from 'styled-components';
import { useParams } from 'react-router';

const OthersChat = ({ chat }) => {
  const { userId } = useParams();

  return (
    <ChatWrapper>
      <ProfileImg
        src={require('../../assets/profileImg/' + userId + '.jpg').default}
      />
      <ChatText>{chat.text}</ChatText>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;

  margin: 2.5rem 0.5rem 0 0.5rem;
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
  border-radius: 1.25rem 1.25rem 1.25rem 0.25rem;

  -webkit-user-select: none;
`;

export default OthersChat;
