import styled, { css } from 'styled-components';

const ChatBox = ({ chatList, userId }) => {
  const filteredChatList = chatList[parseInt(userId) - 1];
  return (
    <>
      {filteredChatList.message.map((chat) => (
        <Wrapper sender={chat.sender} key={chat.date}>
          <ProfileImg
            src={require(`../../assets/profileImg/${chat.sender}.jpg`).default}
          />
          <ChatBubble sender={chat.sender}>
            <TextWrapper>
              <ChatText sender={chat.sender}>{chat.text}</ChatText>
            </TextWrapper>
          </ChatBubble>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.sender === 0 ? 'row-reverse' : 'row')};

  margin: 5% 0;
`;

const ProfileImg = styled.img`
  width: 12.5%;
  height: 12.5%;

  margin: 0 5%;

  border-radius: 50%;

  object-fit: cover;
`;

const ChatBubble = styled.section`
  max-width: 60%;
  margin-top: 5%;

  ${(props) =>
    props.sender === 0
      ? css`
          background: #6699ff;
          border-radius: 1.25rem 0.25rem 1.25rem 1.25rem;
        `
      : css`
          background: #efefef;
          border-radius: 0.25rem 1.25rem 1.25rem 1.25rem;
        `}
`;

const TextWrapper = styled.div`
  -webkit-transform: scale(0.8);
`;

const ChatText = styled.span`
  font-size: 10px;
  -webkit-transform: scale(0.5);

  text-align: justify;
  word-break: break-all;

  -webkit-user-select: none;
  color: ${(props) => (props.sender === 0 ? '#ffffff' : '#000000')};
`;

export default ChatBox;
