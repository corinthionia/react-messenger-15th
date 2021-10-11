import React from "react";
import SideBar from "./sidebar/components.mainpage.sidebar.sidebar";
import ChatScreen from "./chatscreen/components.mainpage.chatscreen.chatscreen";

function MainPage() {
  return (
    <div>
      <SideBar />
      <ChatScreen />
    </div>
  );
}

export default MainPage;
