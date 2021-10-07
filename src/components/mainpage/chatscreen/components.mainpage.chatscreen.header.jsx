import React from "react";
import "./components.mainpage.chatscreen.header.css";
import profileIcon from "./profile1.jpeg";

function Header() {
  return (
    <div className="header">
      <img src={profileIcon} alt="profile" className="profile" />
      <div className="userinfo">
        <div className="username">TempUser</div>
        <br />
        <div className="status">Online</div>
      </div>
    </div>
  );
}

export default Header;
