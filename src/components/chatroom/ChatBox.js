import styled from 'styled-components';
import { useParams } from 'react-router';
import { useEffect, useRef } from 'react';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

const ChatBox = ({ chatList }) => {
  const scrollRef = useRef();
  const { userId } = useParams();

  // 제가 이 parseInt 때문에 몇 시간을 고생했는지 아시나요. . .  ........... .......... ㅠㅠ
  const filteredChatList = chatList.filter(
    (chats) => chats.userId === parseInt(userId)
  )[0].message;

  useEffect(() => {
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatList]);

  console.log(filteredChatList);

  return (
    <Wrapper ref={scrollRef}>
      {filteredChatList.map((chat) =>
        chat.sender === 0 ? (
          <MyChat key={chat.date} chat={chat} />
        ) : (
          <OthersChat key={chat.date} chat={chat} />
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export default ChatBox;
