const AboutItem = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-semibold">{props.title}</h3>
      <span>{props.text}</span>
    </div>
  );
};

export default AboutItem;
