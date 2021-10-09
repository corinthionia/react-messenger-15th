import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

const ChatBox = ({ chatList, setChatList, users }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  }, [chatList]);

  return (
    <ChatList ref={scrollRef}>
      {chatList.map((chat) =>
        chat.userId === 0 ? (
          <MyChat key={chat.date} chat={chat} users={users} />
        ) : (
          <OthersChat
            key={chat.date}
            chat={chat}
            chatList={chatList}
            setChatList={setChatList}
            users={users}
          />
        )
      )}
    </ChatList>
  );
};

const ChatList = styled.section`
  height: 77.5%;

  overflow: auto;

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
