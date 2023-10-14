const EducationItem = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-semibold">{props.title}</h3>
      <h4>{props.organization}</h4>
      <h4 className="text-sm">{props.period}</h4>
    </div>
  );
};

export default EducationItem;
