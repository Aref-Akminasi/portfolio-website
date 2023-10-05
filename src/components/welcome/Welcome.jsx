import aref from '../../assets/aref.png';
import Container from '../Container';
import SocialMedia from '../SocialMedia';
import SectionTitle from '../section-title/SectionTitle';

const Welcome = () => {
  return (
    <section className="bg-lightGray">
      <Container className="flex flex-col lg:flex-row justify-between px-16 pt-16 lg:pt-0 items-center space-y-32 md:space-y-0">
        <div className="flex flex-col space-y-8 max-w-lg">
          <SectionTitle title={'Welcome'} />
          <h2 className="leading-normal md:leading-normal font-bold text-green text-5xl md:text-6xl ">
            <span className="text-black">Hey, I'm </span> <br />
            Aref Akminasi
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium">
            Front-end developer
          </h3>
          <h4 className="text-base font-light text-gray">
            Committed to Front-end development and exceptional user experiences,
            I'm a Communication & Multi-media Design graduate based in The
            Hague, Netherlands.
          </h4>
          <SocialMedia />
        </div>
        <div className="h-fit md:h-165 flex items-end">
          <img src={aref} alt="aref" className="w-full md:max-w-md" />
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
