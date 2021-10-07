import React from "react";
import "./components.mainpage.chatscreen.chatscreen.css";
import Header from "./components.mainpage.chatscreen.header";
import ChatRoom from "./components.mainpage.chatscreen.chatroom";
import Form from "./components.mainpage.chatscreen.form";

function ChatScreen() {
  return (
    <div className="main">
      <Header />
      <ChatRoom />
      <Form />
    </div>
  );
}

export default ChatScreen;
