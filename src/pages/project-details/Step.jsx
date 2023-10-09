import Container from '../../components/Container';

const Step = (props) => {
  return (
    <Container className="flex flex-col lg:flex-row items-center p-4 lg:px-16 lg:items-start justify-between space-x-4 space-y-4 lg:space-y-0">
      <div className="max-w-3xl flex flex-col space-y-4">
        <h3 className="font-medium text-2xl">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <img src={props.imgUrl} className="w-auto lg:max-w-sm"></img>
      </div>
    </Container>
  );
};

export default Step;
