import React from "react";
import "./components.mainpage.sidebar.sidebar.css";
import chatIcon from "./messenger.png";
import userIcon from "./user.png";
import moreIcon from "./more.png";

function SideBar() {
  return (
    <div>
      <div className="sidenav">
        <img src={userIcon} className="user" alt="user" />
        <img src={chatIcon} className="chat" alt="chat" />
        <img src={moreIcon} className="more" alt="more" />
      </div>
    </div>
  );
}

export default SideBar;
