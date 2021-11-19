import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

// 아직 수정 중입니다...
const InputForm = ({ chatList, setChatList, currentUser }) => {
  const { userId } = useParams();

  const [inputText, setInputText] = useState('');

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

      // 좀더 멋있게 쓰고 싶은데 방법을 모르겠어요 이거 보시는 분 헬프 미,,,
      setChatList(
        chatList
          .slice(0, parseInt(userId) - 1)
          .concat([
            {
              userId: parseInt(userId),
              message: chatList
                .slice(parseInt(userId) - 1, parseInt(userId))[0]
                .message.concat(msg),
            },
          ])
          .concat(chatList.slice(parseInt(userId)))
      );
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
