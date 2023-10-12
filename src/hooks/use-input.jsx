import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');
  const [valueIsValid, setValueIsValid] = useState(false);
  const [usernameIsTouched, setUsernameIsTouched] = useState(false);

  const changeUsernameHandler = (e) => {
    setUsernameIsTouched(true);
    if (e.target.value) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
    setUsername(e.target.value);
  };

  return [];
};

export default useInput;
