import { useEffect, useState } from 'react';

import useInput from '../../hooks/use-input';

const unsernameRegex = /^[A-Za-z_\s\u00C0-\u017F]{3,25}$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const messageRegex = /^.{1,}$/;

const ContactForm = () => {
  const [responseIsOk, setResponseIsOk] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    setTimeout(() => {
      if (isMounted && responseIsOk && formSubmitted) {
        setFormSubmitted(false);
        setResponseIsOk(false);
      }
    }, 3000);

    return () => {
      isMounted = false; // component will unmount, set flag to false
    };
  }, [responseIsOk]);

  const {
    value: usernameValue,
    valueIsValid: usernameIsValid,
    fieldIsTouched: usernameIsTouched,
    onChangeHandler: usernameChangeHandler,
    onBlurHandler: usernameBlurHandler,
    resetField: resetUsername,
  } = useInput(unsernameRegex);

  const {
    value: phoneNumberValue,
    valueIsValid: phoneNumberIsValid,
    fieldIsTouched: phoneNumberIsTouched,
    onChangeHandler: phoneNumberChangeHandler,
    onBlurHandler: phoneNumberBlurHandler,
    resetField: resetPhoneNumber,
  } = useInput(phoneNumberRegex);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    fieldIsTouched: emailIsTouched,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    resetField: resetEmail,
  } = useInput(emailRegex);

  const {
    value: messageValue,
    valueIsValid: messageIsValid,
    fieldIsTouched: messageIsTouched,
    onChangeHandler: messageChangeHandler,
    onBlurHandler: messageBlurHandler,
    resetField: resetMessage,
  } = useInput(messageRegex);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      usernameIsValid &&
      phoneNumberIsValid &&
      emailIsValid &&
      messageIsValid
    ) {
      addFormDataHandler();
    } else {
    }
  };

  const addFormDataHandler = async () => {
    const response = await fetch(
      'https://portfolio-website-aref-default-rtdb.europe-west1.firebasedatabase.app/form-submits.json',
      {
        method: 'POST',
        body: JSON.stringify({
          name: usernameValue,
          phoneNumber: phoneNumberValue,
          email: emailValue,
          message: messageValue,
        }),

        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const responseStatus = await response.ok;
    console.log('response-status:', responseStatus);
    setTimeout(() => {
      setResponseIsOk(responseStatus);
      setFormSubmitted(true);
    }, 1000);
    resetForm();
  };

  const resetForm = () => {
    resetUsername();
    resetPhoneNumber();
    resetEmail();
    resetMessage();
  };

  const inputValidClasses =
    'w-full h-12 outline-none px-4 md:w-96 border border-black';
  const inputInvalidClasses =
    'w-full h-12 outline-none px-4 md:w-96 border border-error focus:border-black';

  const textAreaValidClasses =
    'w-full h-24 outline-none p-4 md:w-96 border border-black';
  const textAreaInValidClasses =
    'w-full h-24 outline-none p-4 md:w-96 border border-error focus:border-black';

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
        className={
          !emailIsValid && emailIsTouched
            ? inputInvalidClasses
            : inputValidClasses
        }
        value={emailValue}
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
      {formSubmitted ? (
        responseIsOk ? (
          <span className="text-green h-4">Form submitted successfully!</span>
        ) : (
          <span className="text-error h-4">
            Server error, please try again later
          </span>
        )
      ) : (
        <span className="h-4"></span>
      )}
    </form>
  );
};

export default ContactForm;
