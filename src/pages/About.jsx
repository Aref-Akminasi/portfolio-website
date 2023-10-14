import ButtonPrimary from '../components/ButtonPrimary';
import Container from '../components/Container';
import AboutInfo from '../components/about/AboutInfo';
import Skillset from '../components/skillset/Skillset';

const About = () => {
  return (
    <>
      <header className="bg-lightGray py-16">
        <Container className="flex flex-col lg:flex-row px-16 items-center space-x-0 lg:space-x-32 space-y-16 lg:space-y-0">
          <div className="flex flex-col space-y-6 max-w-3xl">
            <h1 className="font-semibold text-3xl md:text-4xl">
              A little about me
            </h1>
            <h2 className="font-light text-gray text-base md:text-xl">
              Explore this section to discover the projects that I've poured my
              skills and passion into, exemplifying the best of my front-end
              development and design expertise
            </h2>
          </div>
          <ButtonPrimary
            target="_blank"
            to="https://drive.google.com/file/d/1dtl38VAcW8fFCq8BZaD2X8JZas1W99bv/view?usp=sharing"
          >
            View&nbsp;CV
          </ButtonPrimary>
        </Container>
      </header>

      <section>
        <AboutInfo />
      </section>

      <section>
        <Skillset />
      </section>
    </>
  );
};

export default About;
