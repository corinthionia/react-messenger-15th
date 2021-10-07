import { useState } from 'react';
import styled from 'styled-components';

const MessageForm = ({ chats, setChats }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addNewMsg = (e) => {
    e.preventDefault();

    if (inputText === '') {
      alert('Please enter a message.');
    } else {
      const newMsg = {
        id: Date.now(),
        text: inputText,
      };

      setChats([...chats, newMsg]);
    }

    setChats('');
  };

  return (
    <Form>
      <AddBtn>😀</AddBtn>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Please enter a message"
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
  justify-content: space-around;
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

export default MessageForm;
