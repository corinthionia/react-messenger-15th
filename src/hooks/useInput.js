import { useState } from 'react';

const useInput = (initialValue) => {
  const [inputText, setInputText] = useState(initialValue);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return [inputText, setInputText, handleInputChange];
};

export default useInput;
