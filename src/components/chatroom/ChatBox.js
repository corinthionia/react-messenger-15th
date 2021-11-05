import MyChat from './MyChat';
import OthersChat from './OthersChat';

import { useEffect, useRef } from 'react';

import chat from '../../assets/data/chat.json';
import { useParams } from 'react-router';
import styled from 'styled-components';

const ChatBox = ({ setChatList, users }) => {
  const { userId } = useParams();
  const scrollRef = useRef();

  // 제가 이 parseInt 때문에 몇 시간을 고생했는지 아시나요. . .  ........... .......... ㅠㅠ
  const chatList = chat.filter((chats) => chats.userId === parseInt(userId))[0]
    .message;

  useEffect(() => {
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatList]);

  return (
    <Wrapper ref={scrollRef}>
      {chatList.map((chat) =>
        chat.sender === 0 ? (
          <MyChat key={chat.date} chat={chat} />
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
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ChatBox;
