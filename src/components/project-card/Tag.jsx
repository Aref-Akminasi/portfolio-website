const Tag = (props) => {
  return (
    <span className="inline-block text-blue px-4 py-2 border rounded-md text-xs mr-3 mt-3">
      {props.children}
    </span>
  );
};

export default Tag;
