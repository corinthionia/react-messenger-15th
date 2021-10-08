import React, { useState } from "react";
import "./components.mainpage.chatscreen.chatscreen.css";
import Header from "./components.mainpage.chatscreen.header";
import ChatRoom from "./components.mainpage.chatscreen.chatroom";
import Form from "./components.mainpage.chatscreen.form";

function ChatScreen() {
  const [user, setUser] = useState(0);
  const [UserChat, changeChat] = useState([]);

  const addChat = (user, chat) => {
    const length = UserChat.length;
    const tempChat = [...UserChat, { user, chat, length }];
    // window.alert(tempChat);
    changeChat(tempChat);
  };

  return (
    <div className="main">
      <Header user={user} setUser={setUser} />
      <ChatRoom UserChat={UserChat} />
      <Form user={user} addChat={addChat} />
    </div>
  );
}

export default ChatScreen;
