import { useState } from 'react';

const useInput = (initialText) => {
  const [text, setForm] = useState(initialText);

  const handleInputChange = (e) => {
    setForm((text) => ({ ...text, [e.target.name]: e.target.value }));
  };

  return [text, handleInputChange];
};

export default useInput;
