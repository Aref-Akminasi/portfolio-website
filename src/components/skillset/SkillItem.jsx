const SkillItem = (props) => {
  return (
    <div
      key={props.title}
      className="flex flex-col items-center space-y-4 justify-between"
    >
      <img
        src={props.imageUrl}
        alt={props.title}
        className="skill h-20 cursor-wait"
      />
      <h4 className="text-base text-gray">{props.title}</h4>
    </div>
  );
};

export default SkillItem;
