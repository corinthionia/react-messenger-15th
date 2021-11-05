import { useState } from 'react';
import styled from 'styled-components';

const InputForm = ({ currentUser, chatList, setChatList }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        date: Date.now(),
        userId: currentUser.id,
        text: inputText,
        isDoubleClicked: false,
      };

      setChatList([...chatList, msg]);
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
