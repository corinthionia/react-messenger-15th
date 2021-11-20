import { useState } from 'react';

const useInput = (initialValue: any) => {
  const [inputText, setInputText] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return [inputText, setInputText, handleInputChange];
};

export default useInput;
