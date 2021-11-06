import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

// 아직 수정 중입니다...

const InputForm = ({ chatList, currentUser }) => {
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

      // 이걸 push 말고 state라든가 다른 걸 쓰는 방법이 있을까요?
      chatList[parseInt(userId) - 1].message.push(msg);
    } else {
      alert('Please enter a message.');
    }
    console.log(chatList);
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
