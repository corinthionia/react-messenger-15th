import { useParams } from 'react-router';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { Bottom } from '../commons/Components';

const InputForm = () => {
  const { userId } = useParams();

  const [inputText, handleInputChange] = useInput('');

  const handleAddNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        userId: userId,
        message: inputText,
        sentAt: Date.now(),
        isDoubleClicked: false,
      };
    }

    console.log(Date.now());
  };

  return (
    <Bottom>
      <AddBtn type="button">😀</AddBtn>
      <Input />
      <AddBtn type="button" onClick={handleAddNewMsg}>
        ➕
      </AddBtn>
    </Bottom>
  );
};

const Input = styled.input`
  width: 60%;
  height: 50%;
  padding: 0 4%;

  outline: none;
  font-size: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 12px;
`;

const AddBtn = styled.button`
  width: 10%;
  height: 50%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export default InputForm;
