import { useState } from 'react';

const ContactForm = () => {
  const [username, setUsername] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(false);
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

  const InputValidClasses = 'w-64 h-12 outline-none px-4 md:w-96 border';
  const InputInvalidClasses =
    'w-64 h-12 outline-none px-4 md:w-96 border border-error';
  return (
    <form className="flex flex-col space-y-3">
      <label className="font-light text-gray " htmlFor="username">
        Name*
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className={
          !usernameIsValid && usernameIsTouched
            ? InputInvalidClasses
            : InputValidClasses
        }
        value={username}
        onChange={changeUsernameHandler}
        required
      />

      <label className="font-light text-gray" htmlFor="phone-number">
        Phone number
      </label>
      <input
        type="text"
        id="phone-number"
        name="phone-number"
        className="w-64 h-12 outline-none px-4 md:w-96 border"
      />

      <label className="font-light text-gray" htmlFor="email">
        Email*
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-64 h-12 outline-none px-4 md:w-96 border"
        required
      />

      <label className="font-light text-gray" htmlFor="message">
        Message*
      </label>
      <textarea
        type="text"
        id="message"
        name="message"
        className="w-64 h-24 outline-none p-4 md:w-96 border"
        required
      />

      <button type="submit" className="bg-black text-white py-2">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
