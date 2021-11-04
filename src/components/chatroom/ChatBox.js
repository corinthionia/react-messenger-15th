import { useEffect, useRef } from 'react';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

const ChatBox = ({ chatList, setChatList, users }) => {
  return (
    <>
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
    </>
  );
};

// const Wrapper = styled.section`
//   overflow: auto;
//   height: 75%;

//   &::-webkit-scrollbar {
//     width: 0.75rem;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: none;
//   }

//   :hover {
//     &::-webkit-scrollbar-thumb {
//       background: #d8d8d8;
//       background-clip: padding-box;

//       border-radius: 1rem;
//       border: 0.25rem solid transparent;
//     }
//   }
// `;

export default ChatBox;
