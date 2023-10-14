const LanguageItem = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="font-semibold">{props.title}</h3>
      <h4>{props.text}</h4>
    </div>
  );
};

export default LanguageItem;
