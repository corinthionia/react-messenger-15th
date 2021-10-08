import { useState } from 'react';
import styled from 'styled-components';

const InputForm = ({ currentUser, chat, setChat }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const item = {
        date: Date.now(),
        userId: currentUser.id,
        text: inputText,
      };

      setChat([...chat, item]);
    } else {
      alert('Please enter a message.');
    }
    setInputText('');
  };

  const sendSticker = () => {
    alert('이모티콘은 준비 중입니다... ^^');
  };

  return (
    <Form>
      <AddBtn type="button" onClick={sendSticker}>
        😀
      </AddBtn>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Message..."
      />
      <AddBtn onClick={addNewMsg}>➕</AddBtn>
    </Form>
  );
};

const Form = styled.form`
  height: 10%;

  border-top: 0.15rem solid #efefef;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  height: 50%;
  width: 65%;

  border: 0.15rem solid #efefef;
  border-radius: 1.5rem;

  padding: 0 4%;
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
