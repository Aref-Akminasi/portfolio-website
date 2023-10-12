import { useState } from 'react';

const useInput = (regex) => {
  const [value, setValue] = useState('');
  const [valueIsValid, setValueIsValid] = useState(false);
  const [fieldIsTouched, setFieldIsTouched] = useState(false);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    setFieldIsTouched(true);
    if (regex.test(value)) {
      setValueIsValid(true);
    } else {
      setValueIsValid(false);
    }
  };

  return {
    value,
    valueIsValid,
    fieldIsTouched,
    onChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
