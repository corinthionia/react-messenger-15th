import React, { useState } from "react";
import "./components.mainpage.chatscreen.chatscreen.css";
import Header from "./components.mainpage.chatscreen.header";
import ChatRoom from "./components.mainpage.chatscreen.chatroom";
import Form from "./components.mainpage.chatscreen.form";

function ChatScreen() {
  const [user, setUser] = useState(0);
  const [leftUserChat, changeLeftChat] = useState([]);
  const [rightUserChat, changeRightChat] = useState([]);

  const addChatLeft = (chat) => {
    const tempChat = [...leftUserChat, { chat }];
    changeLeftChat(tempChat);
  };

  const addChatRight = (chat) => {
    const tempChat = [...rightUserChat, { chat }];
    changeRightChat(tempChat);
  };

  return (
    <div className="main">
      <Header user={user} setUser={setUser} />
      <ChatRoom leftUserChat={leftUserChat} rightUserChat={rightUserChat} />
      <Form user={user} addChatLeft={addChatLeft} addChatRight={addChatRight} />
    </div>
  );
}

export default ChatScreen;
