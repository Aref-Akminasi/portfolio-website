import Container from '../components/Container';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="flex flex-col space-y-8 md:space-y-32 p-16">
      <h1 className="text-2xl md:text-4xl font-bold">404 - Page not found</h1>
      <h2 className="text-base md:text-xl">
        The page you are attempting to access does not exist or has been
        relocated.
        <br /> Please use the navigation menu to find the desired content or
        return to the{' '}
        <Link to="/" className="underline">
          homepage
        </Link>
      </h2>
    </Container>
  );
};

export default NotFound;
