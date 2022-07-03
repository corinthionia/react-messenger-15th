import { createContext, useState } from 'react';
import chats from '../assets/chats.json';

export const ChatListContext = createContext(undefined);

const ChatListProvider = ({ children }) => {
  const [chatList, setChatList] = useState(chats);

  const setChatListHandler = (chatList) => setChatList(chatList);

  return (
    <ChatListContext.Provider value={{ chatList, setChatListHandler }}>
      {children}
    </ChatListContext.Provider>
  );
};

export default ChatListProvider;
