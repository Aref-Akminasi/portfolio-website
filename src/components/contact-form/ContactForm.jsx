import { useState } from 'react';

import useInput from '../../hooks/use-input';

const ContactForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const {
    value: usernameValue,
    valueIsValid: usernameIsValid,
    fieldIsTouched: usernameIsTouched,
    onChangeHandler: usernameChangeHandler,
    onBlurHandler: usernameBlurHandler,
  } = useInput(/^[a-zA-Z_ ]{3,25}$/);

  const {
    value: phoneNumberValue,
    valueIsValid: phoneNumberIsValid,
    fieldIsTouched: phoneNumberIsTouched,
    onChangeHandler: phoneNumberChangeHandler,
    onBlurHandler: phoneNumberBlurHandler,
  } = useInput(/^[0-9]{10}$/);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    fieldIsTouched: emailIsTouched,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
  } = useInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  const {
    value: messageValue,
    valueIsValid: messageIsValid,
    fieldIsTouched: messageIsTouched,
    onChangeHandler: messageChangeHandler,
    onBlurHandler: messageBlurHandler,
  } = useInput(/^.{1,}$/);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      usernameIsValid &&
      phoneNumberIsValid &&
      emailIsValid &&
      messageIsValid
    ) {
      setFormIsValid(true);
      console.log(usernameValue, phoneNumberValue, emailValue, messageValue);
    } else {
      setFormIsValid(false);
    }
  };

  const inputValidClasses =
    'w-64 h-12 outline-none px-4 md:w-96 border border-black';
  const inputInvalidClasses =
    'w-64 h-12 outline-none px-4 md:w-96 border border-error focus:border-black';

  const textAreaValidClasses =
    'w-64 h-24 outline-none p-4 md:w-96 border border-black';
  const textAreaInValidClasses =
    'w-64 h-24 outline-none p-4 md:w-96 border border-error focus:border-black';

  return (
    <form className="flex flex-col space-y-3" onSubmit={submitHandler}>
      <label className="font-light text-gray " htmlFor="username">
        Name*
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className={
          !usernameIsValid && usernameIsTouched
            ? inputInvalidClasses
            : inputValidClasses
        }
        value={usernameValue}
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        required
      />

      <label className="font-light text-gray" htmlFor="phone-number">
        Phone number*
      </label>
      <input
        type="text"
        id="phone-number"
        name="phone-number"
        className={
          !phoneNumberIsValid && phoneNumberIsTouched
            ? inputInvalidClasses
            : inputValidClasses
        }
        value={phoneNumberValue}
        onChange={phoneNumberChangeHandler}
        onBlur={phoneNumberBlurHandler}
        required
      />

      <label className="font-light text-gray" htmlFor="email">
        Email*
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={emailValue}
        className={
          !emailIsValid && emailIsTouched
            ? inputInvalidClasses
            : inputValidClasses
        }
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        required
      />

      <label className="font-light text-gray" htmlFor="message">
        Message*
      </label>
      <textarea
        type="text"
        id="message"
        name="message"
        value={messageValue}
        className={
          !messageIsValid && messageIsTouched
            ? textAreaInValidClasses
            : textAreaValidClasses
        }
        onChange={messageChangeHandler}
        onBlur={messageBlurHandler}
        required
      />

      <button
        type="submit"
        className="bg-black hover:bg-darkGray transition-colors duration-300 text-white py-2"
      >
        Submit
      </button>
      {formIsValid && <span className="text-green">Form is sent!</span>}
    </form>
  );
};

export default ContactForm;
