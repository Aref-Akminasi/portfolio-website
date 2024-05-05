const CvItem = (props) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-lightGray shadow-lg hover:shadow-xl duration-300">
      <div className="flex items-center gap-2">
        {props.isPresent && (
          <div className="bg-green w-3 h-3 rounded-full"></div>
        )}
        <span className="font-light text-sm lg:text-base">{props.period}</span>
      </div>

      <h3 className="text-xl lg:text-2xl font-bold text-blue">{props.title}</h3>
      <span className="font-semibold text-sm lg:text-base">
        {props.organization} | {props.location}
      </span>
      <p className="text-sm lg:text-base">{props.description}</p>
    </div>
  );
};

export default CvItem;
