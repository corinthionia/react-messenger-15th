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

export default ChatBox;
