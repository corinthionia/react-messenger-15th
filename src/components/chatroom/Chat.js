import styled from 'styled-components';

import MyChat from './MyChat';
import YourChat from './YourChat';

const Chat = () => {
  return (
    <ChatWrapper>
      <MyChat />
      <YourChat />
    </ChatWrapper>
  );
};

const ChatWrapper = styled.section`
  height: 80%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.9rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    background-clip: padding-box;

    border-radius: 10px;
    border: 0.25rem solid transparent;
  }
`;

export default Chat;
