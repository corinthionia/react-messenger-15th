import React, { useState, useEffect } from "react";
import "./components.mainpage.chatscreen.form.css";
// 스크롤 어떻게 하나요. . .
function Form({ user, addChat }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    //prevent reloading
    e.preventDefault();
    //no submission if empty
    if (!value) {
      window.alert("입력이 없습니다.");
      return;
    }
    // window.alert("user:" + user);
    // window.alert("value:" + value);
    addChat(user, value);

    //reset value
    setValue("");
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          autoFocus
          placeholder="입력하세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
