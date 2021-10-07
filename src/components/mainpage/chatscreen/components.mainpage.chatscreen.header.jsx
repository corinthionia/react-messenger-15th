import React from "react";
import "./components.mainpage.chatscreen.header.css";
import profileIcon from "./profile.jpeg";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={profileIcon} alt="profile" className="profile" />
      </div>
    </div>
  );
}

export default Header;
