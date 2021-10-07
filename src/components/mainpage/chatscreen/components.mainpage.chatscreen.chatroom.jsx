import React, { useState } from "react";
import "./components.mainpage.chatscreen.chatroom.css";
import UserOne from "./profile1.jpeg";
import UserTwo from "./profile2.jpeg";

function ChatRoom(leftUserChat, rightUserChat) {
  return (
    <div className="chatroom">
      <div className="user1">
        <img src={UserOne} alt="profile1" />
        <p>안녕안녕안녕안녕안녕안녕안녕안녕</p>
      </div>
      <div className="user2">
        <img src={UserTwo} alt="profile2" />
        <p>안녕안녕안녕안녕안녕안녕안녕안녕</p>
      </div>
      <div className="user1">
        <img src={UserOne} alt="profile1" />
        <p>안녕안녕안녕안녕안녕안녕안녕안녕</p>
      </div>
      <div className="user2">
        <img src={UserTwo} alt="profile2" />
        <p>안녕안녕안녕안녕안녕안녕안녕안녕</p>
      </div>
    </div>
  );
}

export default ChatRoom;
