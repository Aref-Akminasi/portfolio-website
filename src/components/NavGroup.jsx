const NavGroup = (props) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-bold">{props.title}</h3>
      <ul className="flex flex-col space-y-4">{props.children}</ul>
    </div>
  );
};

export default NavGroup;
