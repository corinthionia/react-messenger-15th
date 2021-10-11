import React, { useRef, useCallback, useEffect } from "react";
import "./components.mainpage.chatscreen.chatroom.css";
import UserOne from "./profile1.jpeg";
import UserTwo from "./profile2.jpeg";

function Chat({ user, chat }) {
  if (user === 0) {
    return (
      <div className="user1">
        <img src={UserOne} alt="profile1" />
        <p>{chat}</p>
      </div>
    );
  } else {
    return (
      <div className="user2">
        <img src={UserTwo} alt="profile2" />
        <p>{chat}</p>
      </div>
    );
  }
}

function ChatRoom({ UserChat }) {
  return (
    <div className="chatroom">
      {UserChat.map((user) => (
        <Chat
          key={user.length}
          index={user.length}
          user={user.user}
          chat={user.chat}
        />
      ))}
    </div>
  );
}

export default ChatRoom;
