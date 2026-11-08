import Container from '../components/Container';
import NavGroup from '../components/NavGroup';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <header className="bg-lightGray py-16">
        <Container className="flex flex-col px-16 space-y-6">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <h1 className="font-semibold text-3xl md:text-4xl">Say Hello!</h1>
            <h2 className="font-light text-gray text-base md:text-xl">
              Ready to Connect? Reach out to discuss opportunities,
              collaborations
            </h2>
          </div>
          <NavGroup>
            <li className="flex space-x-3 items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:arefakminasi@gmail.com">arefakminasi@gmail.com</a>
            </li>
            <li className="flex space-x-3 items-center">
              <i className="fa-solid fa-phone text-base"></i>
              <span>+31 618832668</span>
            </li>
          </NavGroup>
        </Container>
      </header>
    </>
  );
};

export default Contact;
