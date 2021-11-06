import styled from 'styled-components';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

const ChatBox = ({ chatList, userId }) => {
  const filteredChatList = chatList[parseInt(userId) - 1];

  return (
    <Wrapper>
      {filteredChatList.message.map((chat) =>
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
