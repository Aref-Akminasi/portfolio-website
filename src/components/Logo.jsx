import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className="w-44" alt="logo aref akminasi" />
    </Link>
  );
};

export default Logo;
