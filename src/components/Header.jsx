import Container from './Container';

const PortfolioHeader = (props) => {
  const className = 'p-16 ' + props.classes;
  return (
    <header className="bg-lightGray">
      <Container className={className}>{props.children}</Container>
    </header>
  );
};

export default PortfolioHeader;
