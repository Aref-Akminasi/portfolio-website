import StepImg from '../../assets/step.png';
import Container from '../../components/Container';

const Step = (props) => {
  return (
    <Container className="flex flex-row px-16 justify-between">
      <div className="max-w-3xl flex flex-col space-y-4">
        <h3 className="font-medium text-2xl">{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <div>
        <img src={props.imgUrl} className="max-w-sm"></img>
      </div>
    </Container>
  );
};

export default Step;
