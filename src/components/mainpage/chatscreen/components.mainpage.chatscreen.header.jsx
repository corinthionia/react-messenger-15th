import React from "react";
import "./components.mainpage.chatscreen.header.css";
import profileIconOne from "./profile1.jpeg";
import profileIconTwo from "./profile2.jpeg";

function Header({ user, setUser }) {
  var usericon = profileIconOne;
  var username = "";

  if (user === 0) {
    username = "박준열";
    usericon = profileIconOne;
  } else {
    username = "윤시연";
    usericon = profileIconTwo;
  }

  return (
    <div
      className="header"
      onClick={() => {
        if (user === 0) setUser(1);
        else setUser(0);
      }}
    >
      <img src={usericon} alt="profile" className="profile" />
      <div className="userinfo">
        <div className="username">{username}</div>
        <br />
        <div className="status">Online</div>
      </div>
    </div>
  );
}

export default Header;
