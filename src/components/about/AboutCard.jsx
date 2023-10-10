import AboutItem from './AboutItem';

const AboutCard = (props) => {
  return (
    <div className="p-12 bg-lightGray  w-full flex flex-col space-y-4">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.data.map((item) => (
        <AboutItem key={item._key} title={item.title} text={item.text} />
      ))}
    </div>
  );
};

export default AboutCard;
