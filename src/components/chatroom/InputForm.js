import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import chatList from '../../assets/data/chat.json';

const InputForm = ({ currentUser, setChatList }) => {
  const [inputText, setInputText] = useState('');
  const { userId } = useParams();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        date: Date.now(),
        sender: currentUser.id,
        text: inputText,
        isDoubleClicked: false,
      };

      const newList = chatList[parseInt(userId) - 1].message.push(msg);
      //   setChatList([...chatList[parseInt(userId) - 1].message, msg]);
      //   console.log(chatList[parseInt(userId) - 1].message.push(msg));
      console.log(newList);
    } else {
      alert('Please enter a message.');
    }

    setInputText('');
  };

  const sendSticker = () => {
    alert('이모티콘은 준비 중입니다... 🙄');
  };

  return (
    <>
      <AddBtn type="button" onClick={sendSticker}>
        😀
      </AddBtn>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Message..."
      />
      <AddBtn onClick={addNewMsg}>➕</AddBtn>
    </>
  );
};

const Input = styled.input`
  height: 45%;
  width: 60%;

  border: 0.1rem solid #efefef;
  border-radius: 1.5rem;

  padding: 0 0.5rem;
`;

const AddBtn = styled.button`
  height: 50%;
  width: 10%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export default InputForm;
