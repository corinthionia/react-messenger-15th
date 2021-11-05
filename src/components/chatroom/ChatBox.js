import MyChat from './MyChat';
import OthersChat from './OthersChat';

import chat from '../../assets/data/chat.json';
import { useParams } from 'react-router';

const ChatBox = ({ setChatList, users }) => {
  const { userId } = useParams();

  // 제가 이 parseInt 때문에 몇 시간을 고생했는지 아시나요. . .  ........... .......... ㅠㅠ
  const chatList = chat.filter((chats) => chats.userId === parseInt(userId))[0]
    .message;
  console.log(chatList);

  return (
    <>
      {chatList.map((chat) =>
        chat.sender === 0 ? (
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

export default ChatBox;
