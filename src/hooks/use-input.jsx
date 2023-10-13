import { useState } from 'react';

const useInput = (regex) => {
  const [value, setValue] = useState('');
  const [valueIsValid, setValueIsValid] = useState(false);
  const [fieldIsTouched, setFieldIsTouched] = useState(false);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    if (!fieldIsTouched) {
      setFieldIsTouched(true);
    }

    if (regex.test(value)) {
      setValueIsValid(true);
    } else {
      setValueIsValid(false);
    }
  };

  const resetField = () => {
    setFieldIsTouched(false);
    setValueIsValid(false);
    setValue('');
  };

  return {
    value,
    valueIsValid,
    fieldIsTouched,
    resetField,
    onChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
