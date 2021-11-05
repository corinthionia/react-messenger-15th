import { useParams } from 'react-router';

import MyChat from './MyChat';
import OthersChat from './OthersChat';

import chats from '../../assets/data/chat.json';

const ChatBox = ({ chatList, setChatList, users }) => {
  const { userId } = useParams();

  //   const myChatList = chatList.filter((chat) => chat.userId === 0);
  //   const othersChatList = chatList.filter((data) => data.userId.userId);

  //   console.log(othersChatList);

  return (
    <>
      {chats.map((chat) =>
        chat.userId === 0 ? (
          <MyChat chat={chat} users={users} />
        ) : (
          <OthersChat
            chat={chat}
            chatList={chatList}
            setChatList={setChatList}
            users={users}
            userId={userId}
          />
        )
      )}
    </>
  );
};

export default ChatBox;
