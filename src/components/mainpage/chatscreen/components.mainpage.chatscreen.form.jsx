import React, { useState, useEffect } from "react";
import "./components.mainpage.chatscreen.form.css";

function Form({ user, addChatLeft, addChatRight }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    //prevent reloading
    e.preventDefault();
    //no submission if empty
    if (!value) {
      window.alert("입력이 없습니다.");
      return;
    }
    if (user === 0) {
      addChatLeft(value);
    } else {
      addChatRight(value);
    }
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
