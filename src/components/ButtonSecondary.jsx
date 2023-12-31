import { Link } from 'react-router-dom';

const ButtonSecondary = (props) => {
  const fontSize = `text-black font-bold transition-colors duration-300 group-hover:text-white ${props.size}`;
  return (
    <Link
      className=" border-black border-2 flex items-center space-x-3 px-3 py-2 rounded-md button-secondary group"
      to={props.to}
      target={props.target ? props.target : '_self'}
    >
      <span className={fontSize}>{props.children}</span>
      <svg
        className="secondary-svg"
        width="14px"
        height="16px"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7063 8.70615C14.0969 8.31553 14.0969 7.68115 13.7063 7.29053L8.70625 2.29053C8.31563 1.8999 7.68125 1.8999 7.29063 2.29053C6.9 2.68115 6.9 3.31553 7.29063 3.70615L10.5875 6.9999H1C0.446875 6.9999 0 7.44678 0 7.9999C0 8.55303 0.446875 8.9999 1 8.9999H10.5844L7.29375 12.2937C6.90312 12.6843 6.90312 13.3187 7.29375 13.7093C7.68437 14.0999 8.31875 14.0999 8.70938 13.7093L13.7094 8.70928L13.7063 8.70615Z"
          fill="#000"
        />
      </svg>
    </Link>
  );
};

export default ButtonSecondary;
