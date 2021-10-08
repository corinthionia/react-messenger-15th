import { useEffect } from 'react';
import styled from 'styled-components';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

const ChatBox = ({ currentUser, chat }) => {
  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [chat]);

  return (
    <ChatWrapper>
      {chat.map((chat) =>
        chat.userId === 0 ? (
          <MyChat key={chat.date} currentUser={currentUser} chat={chat} />
        ) : (
          <OthersChat key={chat.date} currentUser={currentUser} chat={chat} />
        )
      )}
    </ChatWrapper>
  );
};

const ChatWrapper = styled.section`
  height: 77.5%;

  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background: none;
  }

  :hover {
    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      background-clip: padding-box;

      border-radius: 1rem;
      border: 0.25rem solid transparent;
    }
  }
`;

export default ChatBox;
