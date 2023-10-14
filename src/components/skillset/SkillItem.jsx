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
      <span className="text-base text-gray">{props.title}</span>
    </div>
  );
};

export default SkillItem;
