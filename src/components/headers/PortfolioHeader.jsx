import Container from '../Container';

const PortfolioHeader = () => {
  return (
    <header className="bg-lightGray">
      <Container className="p-16 ">
        <div className="flex flex-col space-y-6 max-w-3xl">
          <h1 className="font-semibold  text-3xl md:text-4xl">
            Featured Projects I'm Proud Of
          </h1>
          <h2 className="font-light text-gray text-base md:text-xl">
            Explore this section to discover the projects that I've poured my
            skills and passion into, exemplifying the best of my front-end
            development and design expertise
          </h2>
        </div>
      </Container>
    </header>
  );
};

export default PortfolioHeader;
