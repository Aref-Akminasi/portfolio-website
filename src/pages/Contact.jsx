import Container from '../components/Container';
import NavGroup from '../components/NavGroup';
import aref from '../assets/aref.png';
import ContactForm from '../components/contact-form/ContactForm';
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
              <a href="mailto:akminasiaref@gmail.com">akminasiaref@gmail.com</a>
            </li>
            <li className="flex space-x-3 items-center">
              <i className="fa-solid fa-phone text-base"></i>
              <span>+31 618832668</span>
            </li>
          </NavGroup>
        </Container>
      </header>

      <section className="bg-lightGray mt-40">
        <Container className="flex flex-col lg:flex-row justify-between px-8 md:px-16 pt-16 lg:pt-0 items-center space-y-32 md:space-y-0">
          <div className="flex flex-col space-y-8 max-w-lg w-full md:w-auto">
            <h2 className="font-light text-gray text-3xl">Let's Connect!</h2>
            <ContactForm />
          </div>
          <div className="h-fit md:h-165 flex items-end px-8 md:px-0">
            <img src={aref} alt="aref" className="w-full md:max-w-md" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
