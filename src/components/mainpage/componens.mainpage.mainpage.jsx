import React from "react";
import SideBar from "./sidebar/components.mainpage.sidebar.sidebar";
import ChatRoom from "./chatscreen/components.mainpage.chatscreen.chatscreen";

function MainPage() {
  return (
    <div>
      <SideBar />
      <ChatRoom />
    </div>
  );
}

export default MainPage;
